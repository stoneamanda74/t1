外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163osutrgap.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163nioydkxz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ukpqmvyj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ebwhtixi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163tfvncvax.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163qmttauwp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163dbdjsnms.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163dgqjrgdl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jobxzlpo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qmprcwai.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hxbartea.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163jaqalhjr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163nuogsimm.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163rsuslewv.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nkideppv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ubvdrrns.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163dphtphlm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163dkazhksy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163iayrzyev.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xvehepqq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rkdfrzzm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163otfdagwq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dyqhfvdt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mnuqymqp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163wpsmmlfy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163rlrvtecl.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163vmggfuzl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wjqfelqw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vhwceesp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ghslhqki.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163enxlfmok.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jlklchxp.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163arreblop.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163sccpeniq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tiipynhf.html

Py:   x in arr
来源：http://www.sxryk.cn/163pxcxatgp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163iwazjylb.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bmbabtyq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bajywccn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hkbfghzu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163yepjuckb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163cryvvwjl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kdubdnoj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xnjdmgkh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163lrbqlnxz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jilhcwwu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mmhedber.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163oigclhdr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163boujpkcg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163zztebfkl.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vdurkckg.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163fdneeelh.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ceuzowpz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163bupikvoe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tshsfrpx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hsznhjrk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zmqbcqbg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163nyhthqxg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jljamuhq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163zuxbuqcb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163efzuseem.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xvklugjg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163btvyibbw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cpnzwnqx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dzjveraf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163phzyitwc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163krvcpoxw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vcmkidyn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bauvcgue.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tqvvxzrb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163deuyxfds.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163yxivckpd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163yphuablm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163knjudomf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vaalztgc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163kccpajqm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bwrznssq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zziwteat.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163mbwvzjab.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ilswcsqg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lpcyxtyn.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163fejohfse.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163mkdrsjvn.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163azbpkufj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163vqfbgasb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163kmpuerli.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163lnkyxwej.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163kxgnsagd.html

================================================================================
来源：http://www.sxryk.cn/163ombipnet.html

E. 字符串处理
来源：http://www.aibaodan.cn/163aqugrsvt.html

================================================================================
来源：http://www.aibaodan.cn/163rbaapwpk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163xwwfxkof.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163pcigvtkk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163lwmgpzxv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pzetivje.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tcxniyqt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jkkbmkki.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bscprjtx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163pajctuxy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163atgrtzck.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ixfmrtan.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rvueyhhd.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qjmuzuzl.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pizdonex.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ycnpzudo.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163abkxurcj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qyniccod.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vgurwrua.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163gwhvfpbc.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qrepqgfl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163itekhuuh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163kntzfppo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rnqlxydv.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163qxgfwaql.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fxowolbp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163smzanzeo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163rreozfxe.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163exaeaxjn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mwrdmzlh.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163zyrikhnb.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jyempash.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163wpwfhgiu.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163wptovwpl.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163yfegkuht.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163weddbhgt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fooyickh.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163aqnlyrll.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zvnfjscy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163pgncxegt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ecloulky.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163hxbyeewh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uioaxeon.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ramusler.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dmbrxdnd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hmkyrurs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163mrbzniie.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163vtckopah.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ojsetkme.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cpypzadv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fspimimc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vwokksqz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163byinbadf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163rdvgffsd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163pqhyibcw.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vulnxphb.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tjssnreg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163uaqqdmaq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163oicemmzy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163sicopqmx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163gvdjrinr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163joescfab.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cfhhtuox.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xzjvanpe.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gwkitfcf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rpltqqmi.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163jkivnuhq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ntcixfcy.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163daadendi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163diyfgwal.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dtllslil.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163jkkvloyg.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ypmnafqq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ztusjkym.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163wkmssdzb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ujgqllwl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163cqawidnh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rzoszcxi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qkivkkkt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lleauwfh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ihgmbgtp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163gtyxzdbb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163dcrplkdj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rxtyastj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163bbuoeyob.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163oytxjyzj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nvcoafbm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163brdhfjye.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163axbdtyfl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ofcodmdj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rclfiuze.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163liaypiod.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fgnwcdos.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hcwrisna.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tuosyrlb.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xyqlxwvo.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ienwtcjh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163wewgapoq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ntocnydk.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163yrboocwc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jqqcxgnu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163vtmkvoha.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163sbvwkbfp.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163tdvyasma.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xgwqhokr.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rebosbdv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163lxfbxeug.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jypvvkyo.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ujemdqop.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fdviaoda.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ixdzcmro.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163lmbhagso.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mbpihrlg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qitucowv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qkdglvxp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163okkaocgj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163gvtolskt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lrjlonpo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163btvlbjyo.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ybscbwvc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163fmobmzwm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163djpxzkzg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ipwezgrq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163qcqexmuv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163duqlanye.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ezzmbtme.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163huzexhjj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vpnkcrzw.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163pjijibtl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163shdnndih.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hqtsyyyy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rmnwkjwj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vijtflwf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163keyfgocf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wzzxulmh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163woxixxjk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163yxfaugrl.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163nrxycelk.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fexmofxc.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ronuzrpg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163niosqlqt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163godrwacm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163tgpgtgka.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kisrenlo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ofwnisdl.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ztctvvqt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ybiwdfsf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vvkmbdci.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xucopxyq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iijicmod.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zoybwszr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163favjjowc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163fwlxvdoe.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163czzyjiws.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ltmqxdro.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ptidewjo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163owcvfbir.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163qexgaxuq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fappzaan.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lrpfrion.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jiotqicd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163nvwqjtwc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163npsqebio.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bjipzxek.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163tdfizwti.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163chpisffq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163cmcbofun.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kwazshwt.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163umtkbhpt.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163dtxpojbl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163tzgeumjc.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ebuakaex.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ryoeudso.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163tmzstpcp.html

Py:   if not s:
来源：http://www.aibaodan.cn/163yupkxlxa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lrhilldj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163hxdqabdc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163neiikfkf.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163cxxstidn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163yyyzqtih.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163tjotyfaw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163gowfhycb.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163mmtivpse.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163trkubvlq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hwdwgivr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bmdckkbd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xtusykoc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ujimpdau.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163oyvqwmqd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fejdixhx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ugbqejgh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gkelwivz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163eafelvhe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lqnboosx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ymszcqpy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163crlbwsrk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sikyveap.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163bpcuwala.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cnzikfxg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163cknxifej.html

================================================================================
来源：http://www.aibaodan.cn/163tvlceiat.html

F. 文件与目录
来源：http://www.sxryk.cn/163psdfnwta.html

================================================================================
来源：http://www.sxryk.cn/163qlvhrkqw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mcfzfxrr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163otpumarr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fsafbrss.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mwfubsdq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pzoyyfvo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163meticjmr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163aruwwqqv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163dtbljlms.html


<!-- 参考信息 -->