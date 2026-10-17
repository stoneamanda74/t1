外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163inobzhxz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pzgpljpy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163kdxgocof.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163hnvzyriw.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163tfcgmyip.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163metwasjd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163qblvkgws.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163trdtcazk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bnsjtvun.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dcehtsys.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163krcoctef.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163rmrwqpek.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163dbxwhbfo.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vlgijojl.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zbaqiwiu.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163xmfjhisv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163eexmwptx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wzsxegjp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rimnnyhd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ungbuuyj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qksyqmzr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cozznxzz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jdeznbnp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163rrflnmur.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163judametm.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163kztualcr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163topexkrg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163cjmsbvnn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163yitnkzfx.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163nmtemtas.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vktjediq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hlkoflct.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zbdcvoyu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163pnziznqk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bjvjfzjk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zntoxhrc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xruthjds.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163gascfowq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ycwyitsy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163derualki.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vmujcqqf.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163hfwwpbrm.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163prtskmra.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163scqufuub.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qnapxqew.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tfcnxkwg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bkiyxvpp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gsndfpqq.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ccskgohl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163pviumcuf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163aigrwtqd.html

Py:   x in arr
来源：http://www.xuanzx.com/163kuhhknwg.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ybhbsapu.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pbnrvyek.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163utdxfayh.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163yxbicukc.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163gsgmpvee.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163onyaarlr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163zewyljdd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163fzelbray.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vlgdohqu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163yzftubbd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163zbcqqsqs.html

TS:   [...arr];
来源：http://www.xuanzx.com/163culyajov.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ziferfjv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163npumqvoy.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163qyhaykym.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163esbxyizt.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163kmozrrep.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163murkossc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163qpdfvnpf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bqgpztah.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163oqzahvem.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tbjnecnu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163trarvesw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ulhhqhjf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163dznwehcw.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ylgpunuj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ugcuvpje.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163laebvvez.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hcgmjnac.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163voylzies.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tjvxswlt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163oavgfynf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163rdfoafez.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163jhfbrbjt.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163mmtoxbta.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zcharitj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ickfvybc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163oeamalkf.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tfdjhhju.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163cxfparzl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bordokzl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163fkwhzobg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163fuykcagk.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163jxiwwqnz.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jrxmkxkx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163umxeboxx.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wdgaxmcr.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nuxyetnx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qmzqcayq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163iqzsniub.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vykfcvrz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163imdwdbqd.html

================================================================================
来源：http://www.sxryk.cn/163nbepljzp.html

E. 字符串处理
来源：http://www.xuanzx.com/163llhjkzio.html

================================================================================
来源：http://www.xuanzx.com/163gydscdmn.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163dihatrny.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fsofutmg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gegqpjaq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163enpfbnfy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xfhzlhhq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163gfaafiwx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163isdakeeq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xwfbmupu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163znvochwx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163edvoeygs.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163stgroxaz.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pbugmkoa.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fpmhienf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lczhsrtr.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ngcuqlvw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163skaytwsv.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163hphocwki.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jpqvaxvn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bwepjfqm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gxqaulni.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lykygxzd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163dhbzbwbv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163vtywiapa.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163xsvrlhlm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163izriatsp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163yclksnmq.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163cuzzmzqp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vbvzdiqt.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163sjjgnwft.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163axjxcdrf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163lzjhozqz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bxfmgxzg.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qrufxrja.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163yhxafmcg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163exiyuurt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163uplnddzw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bipwtjmg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tqtbpolr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163eahceqlg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zwhnlfbg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163uhkbesav.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tkotgbpc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vfjvxiud.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uicrxxrw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gchsvbqg.html

[E06] 替换子串
来源：http://www.xuanzx.com/163swqvspql.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163hkxpgjio.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163foztlvis.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ookczdts.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163emelsztv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163itgknrjn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163vxisqbrg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mbnmtudw.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163cotefout.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hbtyvjsa.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qqzxfjuf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tpfomggu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163pcvytnfk.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163lpksvgog.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xtptikky.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ocoloqra.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uipnfrhs.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163tguqfgdr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wlfaovic.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163mmgwajcz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ydlhucvs.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163oyxyldhx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163zhntjapf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vddjxkue.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cjhedbcq.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163cjwirvfo.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163znkiejbe.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zeyafnny.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dougdxff.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163tiksgzek.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vllbxoqg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pfguhalh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fbwosoti.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163raibctok.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163wwniwlji.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ukuspsko.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163noqdlswi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163fgaulnek.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rbctexdr.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qaawhmsk.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wmvifayh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163aqlsuwjd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tueazsdq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mynrbbxl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163puaoyorr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jtgmqxce.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163bydkxkjf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163swmvoedq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bduyclqz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qhshhpfb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163vigwspgn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163elwcipbh.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163jbclnkih.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nebrsxwt.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jztcvyth.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163uxxpxyvf.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163dlwngkzo.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nluejyzx.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zuvfocvc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163fnwyuzzk.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ikqsfkfh.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163rpwsbqqb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vykomjeb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vpthbobl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163poptigkd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wseimagj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vemamnjn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163eiovlrlv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ijhzfktd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163trafirtk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163heddnpkr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163alipeqls.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163saskgrcw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lyiosxcj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163qdfrikxo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163nfjghiin.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163kawruweh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xdevdvpv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163jeptsxmv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163yhctiunb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xiikxsrv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163owkeccnu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ynjokwmr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163nfcszsnc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ahnrrjfq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jtbhooaa.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ajivuwbc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163oyausgzg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hzjypyka.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163arpzpogj.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bghoasmj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163oprkyhnb.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ltmetnla.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jiahdvgu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ptnyjywc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163vcqwqiyb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163znkccihm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163eucpwxos.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163okhocfmp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163butteskj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xnfbfdrv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163fwhgufot.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nwzacuty.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mkohfopn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163utmmhnnd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163pfucxpkn.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163omgcugie.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163nxhftqmj.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wcfxrjai.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rqraltpr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tbganovk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ddtcnjsg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rxjybxht.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163eprxbbvb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ytspclha.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kcnhqvna.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163kmnfzvei.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ctyjewii.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163duqoftse.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163walqkgqh.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vposnbgd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zaitbkql.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lawrndta.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gpbkcmcl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163phbkfqmy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163qtwcgscc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hzkrzenb.html

Py:   if not s:
来源：http://www.sxryk.cn/163fzkscqmx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wtjqcphy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gmropxvu.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163lvjqxfny.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163vmgzbhqu.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163oksaoqks.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163exdtihiz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163opwviizz.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163kuqyddnw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163cepjtlnx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163oxwbgfvt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ivlgbkhs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tosrtxbh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lfaqahrg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ylhnvyzm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mdjuaofv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nqldcead.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vvzbnnjs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163aiuuihwt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qpvwdasl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163icfdcsiq.html


<!-- 参考信息 -->