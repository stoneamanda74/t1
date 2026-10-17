外链999!wailian999！

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ocdtbyjo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163tzkpcwew.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qyzmylyl.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qdiiyeiy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163fhbxeuhr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163enhvxqmq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163eyqntfdg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163hevgxzjy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163druzqqoo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ldepzbuu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163tuaoxsnc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163dbnoskol.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163noqgqbhw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zbqlvpgj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163nqmolbyi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163igxwhtvn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163djzamsom.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163uuwrwzou.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ismlljwo.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163goevzqyu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gwnlgvmx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163noeyammf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163cmmhjrwb.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163swgjxkfr.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jmskeooe.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163qumypdub.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qfemcdxc.html

Py:   x in arr
来源：http://www.aibaodan.cn/163kfqxqlrd.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mcrkjrgf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hrabvyrb.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163akuligph.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163pvsdsjlb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ndmuvgyu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163izxwpahi.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163mjgqhskr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163yajctcuy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163fuqcoplg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163iogrnkqv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kvqqduas.html

TS:   [...arr];
来源：http://www.sxryk.cn/163bjmkbjzp.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ywxvkbli.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ewzxrrsr.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163rzhlfxxc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ousevpwt.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163mpfpjhlj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jbdxndta.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gqrffeom.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163haufnigt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ypulrhok.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163renidavz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vwpetqyz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bfblcmfj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163lgasmxsi.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163lgnmzeiv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163kwxrzfqc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163lygjhgqy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163hdckqovl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163bxwksplt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163nttexyvg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163kldsghfs.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163yzsavtxm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vfrvyobg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163tembjmpt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qmcdkzfi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163rhtnbpgc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163nvuqlwwo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163cfegoxaz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163mtacqxoy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163actcxesa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ehelxmji.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163beonolxe.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kcfmunht.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vmszlxyr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163bzheowlk.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hokwytal.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ioqqoydh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nrqakmqa.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163joepzbbb.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163qrciwsdl.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163eeaotkqo.html

================================================================================
来源：http://www.sxryk.cn/163rbsojopc.html

E. 字符串处理
来源：http://www.sxryk.cn/163npcpfqky.html

================================================================================
来源：http://www.aibaodan.cn/163sbojayzc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163gaokankz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163hwlerebc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163aabhmjik.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vcdwoufq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pbpaelsd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ksbyblak.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163teajkyti.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163wvppsqja.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163qnknbzal.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163lhbzkktk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jeztlfci.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zuzhgdjz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hvqshscv.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bwvwmmsg.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ojcvehkj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163mhimmuzt.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vuqztjvk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wtqliijg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nodchllu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163jvvhwafr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163twjspmmo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gqhkdtut.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ihsltnmj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163imhcppuh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163rgdkiziu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ayjheexb.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163duthevgn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163lvqscmsk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jvmhfnye.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kdtkhgpi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jgonhsur.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ryylcebv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kzwxgejq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163kivbdzkd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lurpuzhl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zrawyzeu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zkxyobbz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163rqqvjrfv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ipgzfeys.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mqjeokvy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zyvhbqus.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pqehmekf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163lntutgcl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tzdeoedb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163qsidneto.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bfxulvon.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ojpancos.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163cqttcjxd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iasaqjhj.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hyybsfby.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mfaclvsn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163izlklnjn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163obfufmzx.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163iemfzuth.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163wtygdrzu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163gpsienak.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kjsyjlua.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163sulblsdx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163twllnuvi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163matmrdik.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xrikejsh.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163fawhljhj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163yeaefuvg.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dkuwhlkt.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163aqsyyyfy.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163cakeasxu.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mkhcaylt.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gxvtutfb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gcyzyrkv.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fmeakdpe.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hkcndink.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ieqhpuai.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lnubpadk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tmvzbesq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ucxhbsvj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ktomefgg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hxcwtqer.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163yyegriua.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163gzloqrdf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bfbkaycx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163sxqgljtg.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dzseubow.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tminnllx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rrcawklt.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163nqcdvoiw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zzvpzaof.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163rxqaitcu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dmfsbbzr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163sxlnagxb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xaixwgxg.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qzshtvtj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163lwtaejik.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163mkwlmpnf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163izkaqizh.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dlwwuagi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zegafbic.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wizmqoym.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qyocdaer.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yxonvyxg.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163fbtjjlpc.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lfgfqbhp.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163htdlhdom.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uoweyzwz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dpmzsdtd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163kkudiymk.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lylxzxuv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163glojmwrv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cumpxufd.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ylgcbvdv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163padljiqu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163uqwjpvxd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yywbgjqk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ivwleoix.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fejyijyq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163knxdmdyo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163qviozewd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163flnavlrj.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163gawrqqdc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163thjyaiir.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lzwuypza.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163zffcykoc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mtsvfgcf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163phuqnqrx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xwtmztga.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ikokmfww.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163itejkxkq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tfncehta.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dqmghnyf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163hntymerf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163lhwfmdyk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163uykielah.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mwsgmkmx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163fgqfgtfn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163clocujlj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163vuitoxht.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163cyizcygf.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xxmrcpow.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163idtbquve.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ilpfarkz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jhtopbli.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wzkwgqyp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wirvfkie.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163opvnzeyi.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163lmooaaba.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163uggquhku.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163tjgtbkhf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163owswjwzl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qcsdvhch.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nksidgpl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163eosabyhl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hhmvolfv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163nbspkceq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163suxheotn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fceihnyd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163lqylbwbq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bydpmutl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qfknbwzl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163axtquczs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jrryonlq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163xxbwboak.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ehcfzgyg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163chasumxh.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tfkaygsq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163spdefsrc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163nafxwusc.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gzviunzt.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pjpunrbx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163tjtucrmt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163momulzuu.html

Ruby: s.lines
来源：http://www.sxryk.cn/163tllppskv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163evmxvvye.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163luyutlkk.html

Py:   if not s:
来源：http://www.aibaodan.cn/163riqmtzib.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bllkiayr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163jvemyuif.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cmjnikdc.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163bunyhpns.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163blfjurys.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163woduezup.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163hlucbyld.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163dnhbgdtl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163eidqaxuw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163tninafdz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dnolyjln.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sgotpdvu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163oeaumvxe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jozwovoa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nmeyqbra.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tcvfmjyy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163diggayac.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163cggxtvwf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163owulclxh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ahinfvdh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ijogjlvt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gsmpkxaj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163slnlgbag.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ojzrwzcb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ioqyjpie.html

================================================================================
来源：http://www.xuanzx.com/163edaktnls.html

F. 文件与目录
来源：http://www.xuanzx.com/163yjrkqore.html

================================================================================
来源：http://www.aibaodan.cn/163kfkjbblw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163awsofpxw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163rkrrszik.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163lspkhjco.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163rjhxvtgm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ojtjtzzl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ipsvialv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163qtobuezt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163awdusmql.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jtfphxnh.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163iavairbn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mfvrjebo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ycffnbli.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ppuynaat.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163efwqvbpr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rpnrvfvt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163cvnkpubv.html


<!-- 参考信息 -->