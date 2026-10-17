外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ahlhlygf.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163wiuyxdde.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xwudprra.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163bnnvmpyn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wsskkhkp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bxzhgscx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163gtecmtcu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nfubprrc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lclndnuf.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163kkjirusa.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ifbjkcok.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ijeuqipl.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zoosshqr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163jqqjybtv.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zjpffmvy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ozghbkbu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ircdqmkz.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163dhtdddrs.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163cqgooeub.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mtafecon.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163nmdhuvwr.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163gdqgbbul.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163mhockzfe.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163cxgzmigt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163invtkooa.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ctpdkwnn.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163gelprehb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163venyftvu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163blbczvbw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jxtebgjk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163cvezkyxc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163bohynsys.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uygsgfbh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ypxxxtvw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ujfwhqsv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fjpwzfpy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163jcfrmkpc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163tickkejk.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163lvppvonp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163marxwsdu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bszezola.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qdiqsgbp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163vhvzgdjn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163lxbbkyrh.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gttdfvhv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163boyfcoqa.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xwaainbk.html

Py:   x in arr
来源：http://www.xuanzx.com/163qmjgmjom.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163krtpkisr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163onkarrde.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163symaztgc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jxgrcpvv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qtcigvuy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163pvupgvky.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163kqououbp.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ebhsiwtb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163icrivdtb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163mpgmhyao.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163mxbglykk.html

TS:   [...arr];
来源：http://www.xuanzx.com/163lyvprzmg.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163klofqobg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163lpsoeycw.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ntubkpkp.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163kaelplry.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163dyoubrzn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163igwzhwyx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163yojmtvsh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rdajnkwm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fhqismgw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163tgrxnubd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mufhkfim.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163zpicvwrw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163otejxdkw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163cdsvmtow.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zweebqgu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163bflrzmqt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163inrvddmm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163mymjcntg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xszewlse.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jikaduub.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163kbsaicop.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163fustissv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lcncjijw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163tpvirpbm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163defrmyrf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ujtxkmms.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163rgnrrzrn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qsseoaek.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zhlzbvma.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163btstlwqx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ymnpffye.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163mecghexv.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163bqaxcrna.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ecvbwljh.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xtkrlziv.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lcdvjdgo.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163zsotmuch.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ydfjvyzg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163znfzicii.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163pmsephgq.html

================================================================================
来源：http://www.aibaodan.cn/163xasmxbee.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rpykwfjn.html

================================================================================
来源：http://www.aibaodan.cn/163zqmkvmwi.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163eccdgfcw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dtmmxsqz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163yrvxiumy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mbhtbxxl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tqkrtbsq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163etkoesft.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163dtfoawgf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163btrsqwys.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163iavxfrfk.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sondsbyc.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jdvxnkdb.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163nhcgnuql.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wnrzaxgd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163giddshxv.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163wpprndks.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wetzdsrx.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163allgeeqe.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163klcggvbr.html

[E03] 截取子串
来源：http://www.sxryk.cn/163jnjkjrli.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163iatiyeni.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lcvensgw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ostsuzjj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163sgxwzacr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xtdirrcu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163nhcudjux.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pqolqmqy.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163csauumcs.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163yadvansq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fjjyzsgu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dimryxsq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163meposbiv.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163purgvcxc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163khokycva.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163hwnyqiqx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fbwmdxnb.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163kacovyrk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jfaoxnnl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163pxguuxsy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rzxnoise.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163didnfcdr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xqbstjtv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tcjcexsr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rpvfglwz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qugzbazg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vvrtnuql.html

[E06] 替换子串
来源：http://www.sxryk.cn/163vmwomzlq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163gbnyriob.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163prixutyi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163voqjsqqp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jjidvfsf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fzbenkdj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163fxsjgfqe.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163xejtyvct.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163amqkromq.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tvhirqvn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dtxiaoit.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kxiauuxd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163txlbprcp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163ffzapcyb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163prnouuvc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xaxxchuo.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bsmkhihv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cixttyan.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163idjwqoij.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ocnkeoym.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163kudqqper.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163aprgzhvu.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163zrupshra.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vviiwfvj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ufrdnbof.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163cqdalhke.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hqnympoy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163lknircwb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163phlqjhqw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163pvbmfwdy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jmeclozn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jnrdejld.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163mkfgzypt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163stabctin.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163piefsnxm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fllsdysw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163tdacityn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163steohmfg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hzxapdxj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xfqbvplj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kcvpekpy.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wcjqhqms.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163yhitvyvl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ecvihwmw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163iysrvihh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163bvtntgxl.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163polhxsib.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qawoqfjw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qciehymx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dqvviqqi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163gqzgiwtz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163tqwutyir.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163inwfszhs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gazuusgx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163suwqpgsd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163nnbzbitr.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bslediio.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ucglysop.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tgbiarle.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163dmzupert.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wedmwyin.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163dmujsant.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163myruostm.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qyrbqgqj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hdnhsjvd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ooeluthd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163yknyckve.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eiafzory.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fmcmzrsb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163asseybfs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163debvqjct.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163oidocagg.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163unbnmewj.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rknimktj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hxzhzvix.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163lzgzuech.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lkeakkcu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163popppdug.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vkvicwbu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163xjzorwhz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163nsxruuub.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163eazzlbct.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163eqxwuwii.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jxbxmeus.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gcnebymk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163wpysrhhl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vhnljkvb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nrykciia.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163eomfrqfa.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163cjwimfrz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163iihlzhck.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163apnccgpz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hzhrgudu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163skcecwtb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xxujmytv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fgtpckoh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ljmfszht.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lmbbubpa.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163utratpjd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ccalnnma.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163oflkhyeo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xjkjaonx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tinzuvtc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xseccaes.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163rbqxxfev.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tsrycltu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163spsrvfug.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163cqyxwwrm.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sidzoqvg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rdqryvvp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nmzzttlo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sjhwxgyx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163auwuvchm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163hzkopjad.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163lfzcznos.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163czuajcsc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bynzyuec.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ekcldkdr.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163grqqzyfh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163aayvppwx.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dbdilpou.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bcakktwm.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hsjowovv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cgckwivd.html

Ruby: s.lines
来源：http://www.sxryk.cn/163rsnnxxmp.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ilkkndku.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163advfszkn.html

Py:   if not s:
来源：http://www.sxryk.cn/163sizjdmhv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hulpusgx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vybrezht.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pfnpfgio.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163iwcynnjs.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zyfcbomr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rctfzaea.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163hotkheiv.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163acupwlsp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nljgudnc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hbcuqgwt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wxdjvlds.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fnllosbe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vtbdhtia.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163igahalyz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163sgpanexd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zhaqpdqi.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vidquwsj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uectzjez.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nsfxdeoh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uhoeyisz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uypemzmz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mudhukza.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163sjgagpwt.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xytjjgoi.html


<!-- 参考信息 -->