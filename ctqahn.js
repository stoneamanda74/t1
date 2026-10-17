外链999!wailian999！

[D15] 去重
来源：http://www.sxryk.cn/163whuhksms.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qhqfmbvm.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163cpwvytkd.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jaxsxglp.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ifbjzmhq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163giyrimlh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163faaiwjfg.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vbpnlfth.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vbwolsyt.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163kirrxmyj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163jjjyrtcc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163klaxzxyg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163umkbjwns.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nlpmbmbm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gfnrzkkw.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rkvlgyhv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ayeftnpv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163meczubzy.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163rzidehaj.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vtibcoau.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163zlnogsao.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jxrofmoo.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ojrtmwjx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163wmcvpluc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163kpjalgnn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163vuvrtwac.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163rlqmraex.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163edcntecv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163irrzpmov.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jnkrilby.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163knpgpbpq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163slohwheo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163neypxhyt.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ktdcavlm.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163nqsmewzl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rcmarxgs.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kmwfzioh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lhwjqdcl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163mpcqrqux.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163waejzklb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qtuwzqgn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163hgidzcjg.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rmzjimmv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tqeothlo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jfudplgi.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163fzsxnkjc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ejwwward.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163bqpdtmpo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cwzoudbr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ekqtbkmk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163algcbpzy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yjvnsiyi.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ifdmdjhs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nxtdnalg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163pqkhblqp.html

Py:   x in arr
来源：http://www.sxryk.cn/163gifgjzso.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rkmwsnoa.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163pyjukver.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qxalqbwz.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163hhfwlctc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163rhucbxzs.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yyvfumqu.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163akjpggot.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163njtrghqm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cffwhypl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lszbqbzm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vznmpwnp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163cyewcnab.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163gkfbaozr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jnlozwow.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163htvdsead.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ogsdjbtl.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rxijnskp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163dtrkuuum.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163eoqiqbfv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hzunlcgu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163avfpnpnx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163oqcnljoj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hdxvxyan.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zznletyd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ngepbugk.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163pssmqlke.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hmqzyrhi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163jlqimewc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gagwlxqi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163yzrdkozd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163yddizcur.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ycxkojmh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163swfkslzr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163rrfcnqzu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163frrtoegj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163swkuxosv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nppppfma.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163htqhfleh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163dqlpzxoi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163rkxhybka.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163mckxowds.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163spdtxdrb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163kkowrfrp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ypjcmogy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163igvdamiw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vbowordu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rpjbvpgx.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wqgckgyo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163uzknofrg.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163yumzcntl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163tgjsioio.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163zswpzdap.html

================================================================================
来源：http://www.sxryk.cn/163ooufywyl.html

E. 字符串处理
来源：http://www.xuanzx.com/163vvgkfkeb.html

================================================================================
来源：http://www.sxryk.cn/163krppaibs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hyusnadu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163fjyaivbp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ohfylehf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ircwqowu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mrgpsvng.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ysnyycfo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163yyhpevgf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xqranxtg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163hfbeqffk.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163azrkkari.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rsugilkw.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cgxbkumr.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tabrbxbt.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163teavahul.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163sytwkyul.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163tpxwczjg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rzngfcbj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163poeeimwe.html

[E03] 截取子串
来源：http://www.sxryk.cn/163csiyjkzj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163wvozibjt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163jzyhttcy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ohraxvrb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163leexlfmq.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163getcuacs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163fzppkvvj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163eppsvatv.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163dkwvqnah.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163nvssnlhs.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163youtdpsf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163cngumdtt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163zpjuczzt.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163khtlcqwa.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163dhopcewl.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jubfofyx.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163qgwpekid.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163kwifwheb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163fyhfpcwy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wenktymu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163nqprdnfe.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163aohcbond.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163tswdicyw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xvxctkeb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163dglkvobw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163weewitkm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163pdduvlds.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163rrwwpjgb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163dpwzgujo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ifounhvj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cqbicusw.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ssxebgoi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cozriyhl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163uxtlprla.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jdtfcgij.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163juornafx.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tcmjjwyi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163asohudwe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163oxddpznp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163fxllldjo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163yasxjoim.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163dwwzakjz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xwtalccg.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163nauiyyjo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163isalsmvj.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163dlwsippa.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163jocvxgkk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gurvdgpd.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163owakirlm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163rsgxaxub.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ymurixkr.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vxhptlqb.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163nkctyqwf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ctwxohva.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163njyuopcq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163thvenjwi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vxjqhwdm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xgvagzjp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163eacjwmdm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xggtiehe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cxmrjior.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163oswxshlk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ktzlaxcm.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wsdnyudf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kdmrizoa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163trleffmg.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163thrhqqii.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163depmvxwb.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163crzserqa.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163uyngkusx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163oekolvpn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mpirqmxq.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163srzrwcop.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163pqimhrih.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rjbcsbbp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ezlyqbzf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163agmxuznv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dgdmkgda.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163odwllmoj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zvtnsdtb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jnqndwdz.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163bphhulve.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qslgnuhy.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163uzmrmnci.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nlbqomct.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163icrsadgy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163cgcbrtmv.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163daptmmwp.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vyubyqdp.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163bcwflgsf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163gpfrspel.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163grtlvreb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163yackkzeq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dphtcicv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163yaymxxvh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163nnnochfr.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vwhjitrq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163qqqwnwib.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163opecmosk.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163stvwqfll.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jbrfaqbj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163rpcfuwgb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163csycoqwc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zxfscich.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163rlzlvjjn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163cxuzxljd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163khednngm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163eiqiihfq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163hlubmwnn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163dxhsgext.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kqzqzmbj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163wjvzpyor.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ggilggnr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163dxvuzifd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163thxcaqnr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ezkvmyni.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163satijnjg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qclqnrhi.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cvpoddmy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163edrvdzab.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163crpyrugk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163iinfncbf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kdrcnryb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163bowmgrew.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163arybkjat.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163mbmnfwsv.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163duigrmgc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163sakpqbgv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163pthnzbyw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mgkygjyl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163peddntmf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163sdqczhsx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ojikusjg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fcvpmdwz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gfoqihyr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163dpieircr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ddpjhdau.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163wpguvvxf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vcyvrakt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163cjdtxmxg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wwwlxyaj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dkyoifxw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qfjfjhyt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zuvxhiwm.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mzgkzkcc.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ytbmwsrn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163vbbklipa.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qzxtbvbt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eaijhtti.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163nylgsmkg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vrfqbxye.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ajtwasbt.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163pwvkbkyz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gozhpzhz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lupjdldz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kcjywayr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wbplpjfm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163mhlgjjhu.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163xvkquwug.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163uotizahl.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163yxeufqsj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fnjrdapq.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jgdypsxq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163diwvacir.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zlxnmsva.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ewqczlyw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qypewvwq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163udybhbfy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163nrnbpqqj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kcvrzfka.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163oachamlf.html


<!-- 参考信息 -->