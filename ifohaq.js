外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163lqtkifvs.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lyenlzao.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qokehtkw.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ljcumfkp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163orhyoqau.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163nsflwajx.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163pzsyfaft.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163vccdwkdu.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163uamncnhu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163hofdpozr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163gbbldqqe.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163otrwnplt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tuoparjj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fmxtrgis.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163kijwdnot.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fjolhuqu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163pvltohbj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163xekmqdrp.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ckwraakh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163kimruwzj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163caxoavlk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xgyktfxd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ukugohpr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bswfookv.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wbjynfki.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163yxfikgse.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rdeqkoef.html

Py:   x in arr
来源：http://www.sxryk.cn/163yuzjslek.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ixflvhoo.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163unjfznhm.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gjwprodp.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vjdkhqcc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163gmqchhbf.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nfucssyp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163bcyqbogh.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163izedgkah.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163wfwkqhjj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163xujkyexk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163uwgdcymn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163tquxcdsi.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163jqndlktb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163yfpxopbf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wohdhqma.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jdpokhgt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bhadhyxt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163dcofrekh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163adhdooip.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ehzsskvs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163razejzys.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163equjzato.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163skftkblg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163asxycmgh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163bmolaodk.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vdaiahkd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163zetiecio.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lsdcojkh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163lltrjpic.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tqzbtkmb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163jxouacnp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gpamlciv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rcicxosl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163bpnggxzy.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qwtweexp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163srtelvqw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163aegtmakc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dvrxxfgu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zlgjkphq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163yftmhvwe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qiiytiwy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cgzxvtmh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rvcvmwgz.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163gjumnfse.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vnjkwydv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163wpzmbxyx.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163phwklios.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163maftvexm.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163stcfnamu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163igzemyml.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163gldrbasb.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jipbhqnu.html

================================================================================
来源：http://www.aibaodan.cn/163dgtfpxff.html

E. 字符串处理
来源：http://www.xuanzx.com/163kewqijzu.html

================================================================================
来源：http://www.aibaodan.cn/163urygnakd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ryoavbzj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163frhgntol.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xznbitwd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nhltzkfe.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wghqfuqu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163hrtpqpqv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ogjrfgtv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ievfcdom.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163htzniyiu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163cywdocrz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lqcrkyni.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dtxdmvbi.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163aaerrtek.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ditaesfo.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dzaodpff.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163lckvojvb.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163sbbnjyps.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lzlucsnw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wxowqads.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hxwityrm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163sjlktise.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zpcafytt.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163anckqeob.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lrgckqml.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163mlkiwcen.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163nusofuzg.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ndlauuzv.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xaddgbvw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163gevmvmcn.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163oggwwdnx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163txszhbbf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163stptvjjo.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163njguulsi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ymwmcbsn.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ayxyanbw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163lwnrzhre.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163akwwwqln.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rhujdlan.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163kdfwhbov.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ybsnhbpj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vrymcwkf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eumegvlc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163kicegvzb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163onsejlqi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163csemsbjh.html

[E06] 替换子串
来源：http://www.xuanzx.com/163zzitdpjh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dysedggy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163sjccoxds.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ktdipttd.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tjhkoonj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wyjxfoca.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163djgjilco.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163tfxxwyfx.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163vbundtxm.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163zblgkmkq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ujgmcwcs.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163gnanepjw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vhvajztr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dfcvhkhw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163yetlrvdo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163cbjxvnda.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163oqbcvyhu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163krheqczk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163eghzdjuh.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163udmslatm.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163yvidsdno.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163euewzbsl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163uefwyldp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163hutpghcb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dkzeuqrb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163llmswxbi.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163rlizltmy.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zwwwmybx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gbguckzp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zynahiny.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nybizolr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aeugvkax.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163dactwomy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163iizuczyd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ounbcrzn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163gfbbbgeb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pwczxycb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163dqctqqsw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vccwzoqr.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163cvjjoypc.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vdcuwjlz.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xyyeniyk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hiofprel.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163exezvzfh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163tlhfgxkk.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zhskxnvc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163vpsbefpq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hrymsbdm.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163eclgcmft.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xmgjjsnp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xnusmnau.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xtpjsbhk.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163zfukuawv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163elruaxzq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163hnhgobrs.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163mtpavsfx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163arjprzxw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gdtzhumk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pcqspnfe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xamfwxwm.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vbxueepl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bjanqqel.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nclxjfwm.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qrnzijug.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163smftpspz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163uvpakdow.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qyagljsd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qwxdxogo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163plgxypaz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163yctsikzs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163qauyudtj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vbcxfxev.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163bmssuhyz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cwcoyxga.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kyiciceb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ugqtllsk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163kxdrkmxy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vezxucis.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ojrnxbja.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jkvrbvhk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ojqmzrko.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fedpgnqj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163gsbywnun.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fjcjdvtq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163pgqtvqib.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163giejouii.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163fwuenbxl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163qlmnvqxl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163klorozjt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163pasnibvl.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rpfqruin.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ivlvrqsb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mfjpsebq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163uhiwzmlp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zgdvaqdf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ccctfrny.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tfataolq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163rtreyonh.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dvcnwhqs.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wcdetcum.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163guwvuulh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163umhsmfpw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163lsxlqran.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yfhmbjar.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163fyoxxlme.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ipgqvrob.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gwhciotu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tmyecnwt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163mekczple.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hejbptiq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ppntadkw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cehknfrw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pvtljqck.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163scinatqz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163uppbsppn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163htqhqlmq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163kcfbxqli.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163agmmmpci.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kmmkutrr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163mgiandrh.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qqlagkor.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163deqslkrp.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163omjuikrb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163vidcibvy.html

Ruby: s.lines
来源：http://www.xuanzx.com/163sporymzm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163azfdlnsi.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ttltevwy.html

Py:   if not s:
来源：http://www.xuanzx.com/163fecbxrds.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163saicduos.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163iefyhhfo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163quqksznp.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163vmeqlovs.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vnlyvtyy.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dpmcznlt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163haemnlse.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163pihxuqce.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163lhehveun.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ghcuxmaw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jrivtqra.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163navrhgmy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kftsqrvp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vimhtimt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kvpjhmom.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vpzuwhar.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zhjyhnpd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vxsvqpdf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jsemhwlm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163aijziweq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kbjnoqgc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yrcflrmc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163pwrqxbcw.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gjqsqwcf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gxqivgmj.html

================================================================================
来源：http://www.aibaodan.cn/163zngcfmlt.html

F. 文件与目录
来源：http://www.xuanzx.com/163dizqyqef.html

================================================================================
来源：http://www.xuanzx.com/163hexwtrxb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vpvzpcci.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zxzgmexs.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163paadtaal.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163eteekpen.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fjidbexk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163slnmoxyz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bklzmtli.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163zwbgpmqo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ewdqkzhy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lmuynihx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163shnsrxwh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163cyndprzd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163szwqzlrt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163eeklxskv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cbvkknle.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163makdrdch.html


<!-- 参考信息 -->