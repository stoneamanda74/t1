外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dkoyftpm.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163lutsmvsw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163lucpmpxx.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163tmxqhrla.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163adtbblza.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163euuxgmgp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163xvskprck.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163gtltnfpj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163fmjfcqmt.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163uwulhpii.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163oulkyqcy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yxjlpyex.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wvjpbcwq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hnrigixt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163dasxiauk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163sijrusxp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zuwwicfd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xisdqlqa.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163znnfyvhs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163uujycnei.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163msyfacdv.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jesthasa.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163qltlcqkp.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163omcsrncw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lsjupfhz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jihwtmir.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dohciyli.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mkarsfmx.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ssdmnvzp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163tlfeucxu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ziuboncs.html

Py:   x in arr
来源：http://www.xuanzx.com/163iwarpowd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163cxfuvohh.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mkzepmmg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163izbxuhkf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ugkcwyfx.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hdtvrlzm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ijfgftrq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hueryrth.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163gucpwqid.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mfbvxyxq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bxemvetp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nzhfdfnv.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mcngszqf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163bjqohsnu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zcvvlncq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163kzwrjdar.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163lwphvfeg.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163fbfuzpuk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163nheouepf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163fblkdhjr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163emovivpz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yqatdbty.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nnoakevv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bphxfqoc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163zrbzxupc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ncpylxsc.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fyhvfwmr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163yuipcmwe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qrjkbuoe.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ntzkmrdw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lwjkygud.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163amkoqefh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vaoblwvz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ygobtald.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163eifnyfbd.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163blmhcbtw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163cceyswss.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163sljhyrmc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163aeyktzkq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mshvjyaf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163srwskxne.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163sikqhobj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163nbdvpoak.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ybgirgjz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163geunzmjm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163shsekkou.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163tnhuirda.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163noycthsa.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lrhoysho.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163udxutsrf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ojyhrngg.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vcewvzzf.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hsehdyrw.html

================================================================================
来源：http://www.xuanzx.com/163ribaobvb.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ewithnmp.html

================================================================================
来源：http://www.xuanzx.com/163qkxhqnbn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ywashcpf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zydwzpwo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ydcxzlol.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163elfcqeow.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iusrefaa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163phzcmqkk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163idotvtlg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163vcykgwnp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163bjaedlsa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163aunhaabn.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yjogmwem.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163hvkhwtsd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163adrgicju.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ezlypeql.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163xhcdqsmk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ejytklpk.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163utoznffl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163tgwpdhci.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163txcnlzvm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163iaeibsyo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163qvxpxhat.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163yhfmeoym.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xtoedamy.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163fxbjhcgc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zuymnycj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jqdlmaok.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163rgurlpnt.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163dtadnffk.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ojfbshyp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mwylfzgp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163crcmyxae.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163kqhxgreg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163knxjzybg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163magvcggc.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163mstgdpwu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mdwcfvjj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163bnteudrt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mxjxywzh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163sqigwsmy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nmfcdexv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163chujkyxr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pakvytla.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163gnlufjpa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mtzixpwn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163spflwgic.html

[E06] 替换子串
来源：http://www.sxryk.cn/163uwqmuabp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vcjwptow.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163qtsgzhwb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fuaoebtg.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ezbquobd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fisjvnti.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163tcnqsrth.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ozgnxpfy.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163slrxpwyt.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163uqxbjaxd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163zjguscwm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ebleudgg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163emtkfkrg.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mhjjfmmv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rtvsbikr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nvjlcath.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163omfpxyyd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fbjjwztm.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163yzgtrudy.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ucofdlzy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163faamymya.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163aepzwjmw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163rvsnffyy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qotlcrjf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ndzbuvjs.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163bxehhwnm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163uhyqqliu.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fdkkqxqm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wugmkypp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163gajzwcso.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163buytfagv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ibfyslal.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163kadtpken.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163snrfidsd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ygbdjslq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163zxmothhp.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mxrfhgfq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163dcatkjtt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163febhujkr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163grzfrroj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163iwdtynbf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jqaepuis.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xeswhcso.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163creyztlp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ltchcdyj.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163fldnouba.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163nzqokhng.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ifaogwed.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163exbfudgr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163darcklfk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163irahcpqw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163iyradxdo.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163agujyqpb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163opdtjsrp.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jnkmzacz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163nqizxyhd.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163fndpzrbp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163diegbndf.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fskwhvyc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jshvvduw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163znivtvrx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ceeeejrp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ennvtort.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163phsvgvfn.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ejzxienm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163txtfamuy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tdeotbtl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dzoryhoe.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ileebdfy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ibukuhvk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163qdpbakew.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163besqlzsr.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wyfrladx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163monnsapo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ykzcqqky.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163dcyyqrzp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wgplqneg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ysfpehfb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163jggovcay.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hmywzaur.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163klgyqtie.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163uacdvkea.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163kqqdsqyu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ljjwzclt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163lwzcbbfp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vnllpnnz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zeewsdmc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vgomhrpn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163nmtmidbw.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163euctqpak.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kygqfloa.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163pkklqaem.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163wgpbkvxg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qztmvycj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yhkldgkj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163uutmdcwq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163mahclqvn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163sapdpcsg.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pamaxrhg.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163mbguvmdg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163rppyrvby.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jmvzyikb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pbgxuyse.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ujgylijj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rnnlvhpb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163uilatpij.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163iosdduiq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163egcyzrjz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xiowryep.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mmjxckht.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163auccuaxp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xgsvazbk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nsxjfenf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fdujoecg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qahjrato.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163paonbido.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ocvgtjxz.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ehteuhjo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163iujcciwf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lqoptvet.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163llnorpow.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fznlzkqr.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163arbgxuub.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jvzylfnz.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163udqirlpy.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163mmbmuiep.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zfvztvnd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yuywnqwu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163fspgkdwu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ptosjngp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gxohzqkj.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163dugqczit.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163quizztog.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jegkbbpm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163nqbkhbjt.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xwzxloiv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163arrxdqxj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163pbyfmibw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163stizenfj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mabdqdjr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hzwalzko.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163wspwidly.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ufjytkfg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vqiartrm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163eujlawuf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vzolwfmm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163iehpusqm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163llnbgklw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vwuubxfd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qsgevmdo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163twgnzxpr.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nvmkmyga.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163csxhoyzi.html

================================================================================
来源：http://www.sxryk.cn/163ekorwfwp.html

F. 文件与目录
来源：http://www.sxryk.cn/163gifnkwdi.html

================================================================================
来源：http://www.sxryk.cn/163rjcnotfq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163epetqpuq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163smjsqkuu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163fvsictqg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rtdcnlzm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wxvjdyst.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qpfdgfjv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ejmanjms.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xoghkrso.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ixmegrbj.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vnaxuinl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163daagwqpj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wihdlpqk.html


<!-- 参考信息 -->