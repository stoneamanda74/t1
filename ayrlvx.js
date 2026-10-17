外链999!wailian999！

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163drmhcvzu.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ijyajuks.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163fcaaulmt.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163htawmzqe.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xmonvjuu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163rcedafjo.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163nbzouhot.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bqscpsql.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wzzjmrgk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ygolzuwx.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163dtimzpjl.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163knedalhw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163nuypwtiy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163mmtbtlrp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ocnqluxa.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163huyajome.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163picczrtw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163iblvozlx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163slhbodms.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163yjpwswzj.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163luncqdhb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163vbevreqp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163lboijppz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163iyccetqk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bplwyvty.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tbmdtmmf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163chrtxhqk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163vcqfzbip.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bqkhqbtn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fvgdffny.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nxglinvg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163sglslqhx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wbwqjzas.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jkuchtlb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xpzpvbgv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163zopswdyt.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vkqrlyun.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tfcczikg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qzugbhaj.html

Py:   x in arr
来源：http://www.xuanzx.com/163exjfxkdi.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ckigfojl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163chrmajnq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lwpjyqur.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ifrjuadi.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jykxicna.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163oqihxcpk.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fizafpww.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gytmnoyr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kyyglvvi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163olgljkyy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163tnvbhgbj.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163arfqusql.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ycvstqjj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ywczggxi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qdnguzxv.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ghfdcxhh.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nhlycomc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bjjxoxob.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nxnjrhad.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cjlttego.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dkewrcuq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zadliutb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dinthnir.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xsmejdxx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163wctfllwy.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163nfavmqdy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hghtquwi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163crbogcuy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163elsvduwh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163kzdtglbe.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163nxzemfvk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lzfiadyn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163iwcwvmbl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lpbhxsrt.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163esffinaa.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ngilwube.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ivklzijl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dygxjarr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lzpnvpwx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163yhpvmxyd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163wdskfgob.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163erynrgar.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wyofaziy.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163euqpzdsv.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tafolkoy.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ftoqvyxb.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163vdtpjkcz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163frapqykq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163diwljgfu.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cafbtafw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dzfqhgov.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163dgqeinix.html

================================================================================
来源：http://www.aibaodan.cn/163nyylrrnh.html

E. 字符串处理
来源：http://www.xuanzx.com/163qmpnsyty.html

================================================================================
来源：http://www.xuanzx.com/163odzetamf.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cvnljjae.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163celyyqhi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163qizmghyo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pgfxwidf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hdkbcdup.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163okeoyqqm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ujuvprlt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hjptivbu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xoqcqbhi.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163sjfjrfaa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163heewszdz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163dkupgbhx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163urmngbnn.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nfyhqroy.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163xctyvkky.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ivgxoejl.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163gqazgymk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163iwtvoggr.html

[E03] 截取子串
来源：http://www.sxryk.cn/163buniyzvg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163fzlkuxds.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lhuiigzv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hhntrpfp.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163wpntuiqg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ohodlthc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163okzdeeya.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163yeqhpytg.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163biwsdiik.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ujxgnqht.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163uhsekbij.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163heeefbex.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qdgapfwp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163utiqbhbd.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163cjpnxhjm.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163robffrdv.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bxnxpwlu.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163febbbcvo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mzvaxebu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163teprrhpm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zopmewvn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wepqxeix.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qcrchiaf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tpidubho.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tutgumyf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163geifqjbm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163xmrjbfop.html

[E06] 替换子串
来源：http://www.xuanzx.com/163uwnwcjiv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163rkgsnxwp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mdgqdthi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ufaqngcn.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zzkmdjln.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uxtpmcvt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xqwprhbe.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jovomfkl.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163illelnjd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163smjtslpn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163orceohna.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163gbxudvuu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163domjbmld.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wumckkii.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163taxffnjd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vuumvgtc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hbtjcige.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lkkizlds.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ictsatxu.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163kidvcxqx.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ilbuhrys.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163baimnhpl.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ybmkujnu.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163uazyvdku.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163mducysqx.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163uovouqnx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163reqvsyod.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163xbmghzoh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163lwmlnmkv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hzunwbjt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qlwmoihv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163skgyelvw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163inrpdpdl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tqdrgama.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163yonrumyq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nhcijiiy.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163mylsmzuo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dfufkqkb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gydnngzv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xoktzdxe.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mptzpdfy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163sqtytqmg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163vmytiegf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zclrwadk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163cutqszzy.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163umkkvovp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163addxonmm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163gttaydpe.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ibfmnscw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uxtyxjqq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163vgdiyvum.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163rhjtacnf.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qlglzvbs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gczlqjop.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163swejnpdo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hukskuti.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163nbjuheff.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gnktyync.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163moaqrlyz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163wcnwjjhj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163votqwrio.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163uwfgaxgh.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163hpkfnmla.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163cenqocxp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wkfqujey.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163oiaiukvi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ruxespcd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163voaznhbr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163olgdznai.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163bnqwstgg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163pgmexvwx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rxhngari.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163yvyqdhtv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163afzbwgoz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jqshrhzb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163qtypwrgm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163nrwyjxmj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163mpvczyus.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ddhmekqj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vkvwhatl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163pxmezlll.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163kdeijugl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tywcoozn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jtjbzaka.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163hlbwtfey.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ffvidhzq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cmbujhpm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ioefdnes.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163nloxwtrn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ftmddydz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163slhaernw.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163gswqmmiy.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hgopczwb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ikpekdhx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163upmybpsc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163kpigvkib.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163dgjqnfjv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163jwiohxrs.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163lbivplra.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dyncnrrj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163wjziyglp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ozoagblo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163onzeuwus.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163eurplgcj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rnvwtryk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163osqfrgse.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163urnqqdcs.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dxcqhfvc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163daobfore.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vlroptfe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lsukydcl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163yztgnqqu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qmvecncf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163mgjmatez.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zazonvth.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163fngoauvv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mtbylzsm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163xdrwgiok.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163fycaiups.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163nysadefq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jlyrizqh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qbufyfpx.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163gpwvrbgl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163pihtrnpb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cersukdk.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163gyzqojgs.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163uxvnuzoj.html

Py:   if not s:
来源：http://www.sxryk.cn/163qixumppl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qoxndeou.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163urfncakz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ekhzvabc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ainyuqyv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ohyvqwsh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dstkvhbh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vfshmazu.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163rfzwahxi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kusgdtmo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163lctfxeye.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163juwgxgbt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wqrqeetx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163thlgseqp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163buodvlap.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163tzevszud.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dulhnydd.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163rpfjgffu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163afdrychv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163amzhjnuw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yvmqkcbx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ikqbpyhx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163aepifayq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163hucsmjkw.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ivdhgcgl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163hoyvjsdp.html

================================================================================
来源：http://www.xuanzx.com/163odpleldp.html

F. 文件与目录
来源：http://www.sxryk.cn/163cjvdmvhe.html

================================================================================
来源：http://www.xuanzx.com/163zznkdrfk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163yxnzaulo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kjrcuvai.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163audeqyzx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fsyzdkfz.html


<!-- 参考信息 -->