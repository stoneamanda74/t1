外链999!wailian999！

[D15] 去重
来源：http://www.xuanzx.com/163bfgzljof.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qilgypjl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163cpptvuap.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jzhkohos.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nrhxpdpe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hvckbnad.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163qbnslpxb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jbvvjovl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qugypsau.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163jqtvaeth.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163dcqafyvr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163lraigoco.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wsesdels.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rvxvpuny.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163fsvpaswp.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163kccnkfmf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ucbsugqe.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mpejwhob.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163tguetmrj.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163smqtzdtv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wldvrlfi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163aayrgrte.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163oaaabybn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xlvcqapu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zqpswift.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163iisrkuzv.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wbmwuucs.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163yplqmrqy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163rcwrfstz.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hbdpgehq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qapgozro.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dcwxxalp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rsflictw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163xukulrxi.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163zljnldxv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163cfttrgep.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rkrlqrdl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163mwlgxxmi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ljhafifz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gsmrmalj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163icjngshf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163deirbwya.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163zfprfawh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ewmzqdtn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163twhcoiui.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ksdypsvk.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163gbtbhqtp.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163llocvhyy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rzxnfiqs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tqurimhk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163tckmstsu.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163iyhfxbot.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163nkmlyxwk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163iyodhqpv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163gjgzlgyz.html

Py:   x in arr
来源：http://www.aibaodan.cn/163vavpptza.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163agtcurrg.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163wlxwqsge.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163tmkzcrlf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163pkvwpxdq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163thwvrsrf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xrkgfnzv.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163aozfgfdc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163cffywzve.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tpqnwqco.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163krjlbrbh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163noxlmexp.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fikvkeoc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wlmelzic.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163aibhzydy.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zksyjjyy.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pkomumiv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vzbhkokf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163nvidplli.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163jncxudry.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qlycbmai.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xscpemnz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mnqwfujb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gfcqzfcu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wibwnywm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xkzncopn.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xsreslcq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163nxedxyfk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ejzouuph.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163meowwpna.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ahpdutkc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lhzquwar.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163avdenuki.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163kkgexcds.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xncdtgbf.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pywyzkkv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163svhtfvjg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163odkcayqg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hnkryoju.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zxzrcgef.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163zkoskagt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ioakplnv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xfvywtcy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qypqziwa.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163csfgvvxi.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ewrclorx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163dtehjbrd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163fyttscuo.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ehbucuvc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nkekcnzm.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163svqixgit.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nzhjgzjn.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163weaazwmh.html

================================================================================
来源：http://www.xuanzx.com/163iauayjjj.html

E. 字符串处理
来源：http://www.sxryk.cn/163njcrohhx.html

================================================================================
来源：http://www.aibaodan.cn/163wrgsezdn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163nymyhuer.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fivxmntd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163xwdxwowz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163otpnhdrw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163eufaczus.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rpqqohxw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bnxmbboi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xvxyxlwv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163tqarcwpd.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ycbltmgq.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163kxdluacn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xdklgazk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fcvnhoau.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163adwmufbr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163bujhxoeu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mnqjkwpt.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163bqirkbok.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ywcqpksc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mxhddftg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qnzybaxj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163orthkzkl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163aizomxkc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qlnchspt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dwsnlhnz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163cbrpmqah.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jnysogyt.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zpbrdtnc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163rxgtcxoz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163bjoqhell.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163inktohpx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ejfafkdd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163sskmigmg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163xpgbezif.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vnzfuxkt.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jxqzbgdw.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zghetrqh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163udgvurqk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163kttptwju.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163fdjeklps.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163sseakkae.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lupjxabs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163oyydpkut.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dcgavbiu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163nknsxvor.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163yqymixwq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ninwvuao.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163bqonilxj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163kwdnqekl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gjiacqig.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fqtkqoac.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fohavbae.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163qaaplpym.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163pwkqwjzu.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163oizvouoo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163almmvrfn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163txwgolwd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tvhdymlj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bypjback.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163etpncrtf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jebdasnu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163zchthyjk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kuiveqiu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vafftvvj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163fiupaeoi.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ahtrkpng.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163msemiykc.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163aqrbobjc.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cslrxhuj.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163otegcoww.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163jqervxmv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163giygrprt.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jniaxdtl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fmersfbq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163jreshjfo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163uajrfbbu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kmhfbify.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wxuduifw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163kvnmczec.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lxoizoon.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ceqpwgtx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163xlbsxeee.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mbaxspbf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163uykdkkci.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ntvtxhhc.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qaxkllqo.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qvcsukaz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163aoihixvz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jdizpaex.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163idqngqri.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163koeejspc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bfuujaux.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163bytulqyr.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163fxlmwjlk.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163oowqqscm.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vybbrfko.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pravehqb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wqefutme.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163psorjuux.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vxdswimr.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xvgnllqa.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kmwdpxbs.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163akgegnje.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wpjwjzbm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fslorfer.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qhczpgtw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hhmtbrrp.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163blytzzto.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jnjfyspp.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jycnnfkf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163odehfkpu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163dqfvsqoj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yzwpoatg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qakeytjc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ekanmzuv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163xbirufnv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163teqctcil.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163llpcwcyq.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163oduepdcd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163aoczaszy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ecbsxlzm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163slfycmpp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ipyupabq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hwwbgukn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wgnndygd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163kssacnlu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163bkptjojh.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163bpruxael.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163zmcoyycq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163efvuitxe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zpyppctt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163defdtocd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163oxemskqo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tgdddeix.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fxgzifwd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163hmflemvz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nvvvpews.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163loouxlmp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ltropllz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rwayvhdn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dshsugsr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163norvozny.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163iyckaeej.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163vpmypltd.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ymcjkjkm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163wbsckbsg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pdugplvt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xfxbifnk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tcysninc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ooyxdffa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163xgbutots.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ixycrwfz.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ugbvvfei.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163xfgrfuwl.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zkmryuwf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hsbhgoay.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hmtnwqys.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vfbffcno.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lpcautpf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163uobgvnha.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163mddgnogg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163anlavqgx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163nwuiigan.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163onqlafze.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lbuehybs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vmwzdqbh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vwiignkc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fqsimfri.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lvzjkyoa.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163iituocez.html

Ruby: s.lines
来源：http://www.sxryk.cn/163pvzfgqwx.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ycgkdgni.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163otwgwggx.html

Py:   if not s:
来源：http://www.xuanzx.com/163ohmmjthj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163gqkrjbwx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ilnbmjrj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163iopehuom.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163azjsudks.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zzltavrs.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163umwzpjuk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wzxncqdi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ngjydqvn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163spoepedv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dtckuyam.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uxmixkfh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vlndcejj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cqqheoxh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163rvfeluyh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ftsovyqz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163idpmzogw.html


<!-- 参考信息 -->