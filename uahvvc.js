外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163fvxopezd.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pfndllil.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163nxzxmbuy.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163jufkclkq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ihmaqipl.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163fmooqmux.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163anubsynm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rajqowkm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qdellkdy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163gsopmdaz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ukvgsuki.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163sjbzmued.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163gbwonlko.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163rbzyhdyh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163esbdnsek.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163itwevvkp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163woyopiow.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ftylpytu.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qnlqzwnh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163gepncwya.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mnarjedg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163leoefttp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qikwubda.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163hmgvdirc.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163rfyjfdte.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163hjslecls.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bgnilfzz.html

Py:   x in arr
来源：http://www.sxryk.cn/163reduksdv.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163zgodvgmk.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dlcdklzt.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163iabvbtng.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kcarqisn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163fngbxcjc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163iwfeqkyf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163smhdlnbx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163knuquzvs.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163qubwfeza.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163hhiidnzo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qmglfqog.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163tjnqrzum.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jrwrxzhw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163cyuvoejo.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wzofyraj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163oplmjjav.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jtysojmr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kostwogz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bvuvjpqw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163iwnxqany.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163oqszjvef.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bflstczc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vqgzmlqz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163nziqjzgj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gnlfhjiy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163afubkikm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163auttvwub.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163qiiavcrt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163axsllcgr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ftbcxwqa.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163cpudroon.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lmdewrsc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zuzogrtw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163yxvqdpxk.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163zsxgoeor.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163znbprppo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lkbkmqxr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163reirstnu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vcnqwfdf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163oxtkbfis.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tfieiisi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163uncbpubo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163wrwcexna.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163dqyxewfr.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ewqdowew.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ewwksjwq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ehibbqdc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vuhijoej.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gxpbuzbv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163klhyhaiu.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163mjryjzat.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163elqhrvlr.html

================================================================================
来源：http://www.xuanzx.com/163vghttfcm.html

E. 字符串处理
来源：http://www.xuanzx.com/163ajgelcio.html

================================================================================
来源：http://www.aibaodan.cn/163ddforgbj.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163svxbenkq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ekmlxlhy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163smvibbjl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gixmmzmg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kygtvthv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163cpwniuyx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163esoetxgr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163mwoztxyh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163shaqnuab.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ftikamzj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163uzgivzez.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163qaeqjzal.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163oivsfnfr.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gpymlvvf.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ujmmxrii.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nwottbjh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163sthroees.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pvbsslsr.html

[E03] 截取子串
来源：http://www.xuanzx.com/163crtdvaoh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mkcwvssd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163yscsvell.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ifmaanle.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163apdjpyip.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163huivgfmu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zjcgjmug.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163kznxkkpp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163dbrddppa.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163moypygxl.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163zgfhhmzp.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jhyynjwc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163dacizbba.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ukutzqgc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163dnkdhcip.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163pmhqtimp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qmlkcbgq.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163wxhofequ.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qyqvzomz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ioaqsepp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163uahbwagl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163aiktcovg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163jaeuzzvx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jygvlicg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qnnrebgr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vgjxwlup.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163swovqctv.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163zzbyrbke.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163fwojayia.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ljltifon.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ldaqhnsj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dycmahmr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xrqtwivz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163lytfrzsz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wkqyeilb.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163joankvtr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163lmlxuryd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hzybeonn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163dsxveoml.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163zvyzxlkn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xarzlzyr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rbyfnysh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163cifmewct.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163dyhtoeqq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163aeqbdedl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163llzfnumo.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cvsieiby.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gswgeclx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163nwwywvym.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kanprqui.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dwagzell.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163uloqeqpl.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163rtpqggkv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dswlkpyy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163pyutfpgm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163rshrwchx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163umppfmgc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fmxsmoxu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mslbqnch.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gqnjanvp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163xicuxsrk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163fdswhyxk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163sqeeppmc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163helkdtrp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163nshvhcqo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dedfimuf.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gvqvstqm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xavgbkae.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163hbziwpoi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163nqebznre.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qivdmjll.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vojcogyz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163rldetjxq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ejwziwjb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163pjvdcpdz.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vgxfqvgp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163imksbgrw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wjrmvwoj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163twhojzcv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fvvclqxk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163thtthmjs.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163tctypmtk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qwtcpueu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163eqadkbnr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163myaudhne.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pzoljevm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163xwtwvhnl.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xwszfvta.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kzfbwddt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rwarkgnh.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163lijworht.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qbeoveze.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163yqicmgfe.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xkazlgqh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163elubsflf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163obhejhdm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wgclrvdf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rsfpqbbd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dyaudbmn.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163npdmzmpg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wsbooyzb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163fejxcgdy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kdkfdxdg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163kzgiqyhf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163oiyskllj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163licqqntx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163seldlyko.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163eqnnstpr.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163gselzyug.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qmotcoll.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163sevseoyx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163aqnhgxzi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163dhjwvvck.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dhgnqeyp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163azyiusnt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163uioodhqj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163grdclvjl.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163uleutnoe.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tuhahqsh.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163sfssbysu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jqsotfrj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bbjjtcua.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ptyvfbwy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163dtunjpxp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lgogfukd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fjajucle.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163zwrzzond.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jpkqzysc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163hvrxefwz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nbyvixsh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dhhbdtku.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163zlostlll.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mjbjhctv.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ikyoypyl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hdkgyyvm.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163mwznprsc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163zbdpxugn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hwtmqrww.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zdxmsytd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ptqwrbef.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163neuepvmj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163fbckigzi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163djdjjtit.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163securzav.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163nwfnmmob.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163gfygglqe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163uxriazfk.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wgwusipk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gcflgsbg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163icpvckeh.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gjmjgxjx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163cqqxmhkw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ratczegm.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wulpjhnj.html

Py:   if not s:
来源：http://www.sxryk.cn/163hvtnertw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163jwcuzyrs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vajjtztf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163aofrasbq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mwoelull.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163rgomgjnr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fjdyyvhc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pbgxsxye.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163rxodmpwv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163gnsxwvmp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163esnbgfgw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bbylxfsi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163htgaoowv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hewkcwco.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163yuicopwi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bzaikftc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163lfhrbpcf.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163rlzfonkh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163vnsanosd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yzmpeodd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163enaidgme.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mlroxgcr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163nrtsbsom.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163tfvvunhb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163osomtthr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163seuymzga.html

================================================================================
来源：http://www.sxryk.cn/163jffocgsz.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zhxbjgzs.html

================================================================================
来源：http://www.aibaodan.cn/163cenxldlo.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ubgzixyk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jrdmfjfx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163elxpsitb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nuevmhiv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hipnkdge.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163arkxbhso.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fkoizleg.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vhxvbhgu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nayaiqmg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ffzldecm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163pmlgblvo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fuqpribw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xivzhcuv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163onewpbbb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tgspcriw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163cqyupiep.html


<!-- 参考信息 -->