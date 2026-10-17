外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163cghpyjif.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nsjwnutp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lazkmcaw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hxpkigoc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163swufciql.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zzphiowm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163undwduwq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rpcrjcat.html

[D15] 去重
来源：http://www.xuanzx.com/163wwdmgkbh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ibgxaxkr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ojgmseel.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163sswithbw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163uegurkfq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mhfsrbem.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ylqqfgba.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ndwaxjfl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163lfseyyjz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163abujcymd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ukdgnjzr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163afmuqhkr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xmovqivl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lnwqbyjw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bdvzbaeq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pexlofgo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163udkyxnme.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vkszxvhe.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nbqqpwos.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wccgrnto.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163thjmykna.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ozttkhff.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163fnnskzas.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163tjgqcyqe.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rtkyfqep.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ktkecprp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163trulomgw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vpskekln.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163eagoojzq.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163pjyuuumr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bptnsxkf.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dkgdrlas.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vroaivik.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pjbbcikv.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tnazyslw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ecafyqpi.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163cqvjzyff.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163kcybnlba.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rhwwltgf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xpjemsjy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gdfmerkm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jrpcbjem.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163zxyscrzc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wvybitgl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bydgtbwo.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xooxuihh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163cgelvmpq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tuurencv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sgilgtrl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163scmqgddo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163jvthpaul.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pwwczprm.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qdnyfbid.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163tnciynnz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163pwveepot.html

Py:   x in arr
来源：http://www.xuanzx.com/163gqdnrtfq.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163gtvnxsbo.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163fnphnsvi.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ncckxfck.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zravvmjv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163yxqonyil.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163yrczepji.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163cjkqzgmx.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163tfhnnopc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mmuricci.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163apzvvnpq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163aclstplg.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vqnzjvps.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163sbdzoivw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bwxifqnt.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163gprcdfkf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163dcixcowq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rmdnpshj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wrpjgtvj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163huuzsoyu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gvqvrbjx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tvlholxt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qqmbzleb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163njqedhaz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163swsnsnof.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yoskafmi.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163oygiqwvx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vgznnnyp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163evwdmeyt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163emjmzjsm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wwxxppwl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163scqjwlov.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163keyipibc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tivwtwdl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163czfedgvk.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uaavnlfn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gipmdkhb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163voenrznc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163pmidsret.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163rbxxnktc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163rdvtdkkh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163stvrqjus.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163qnpjlxcl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zlwsafzz.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163tagkynev.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zmadgexp.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ogggdnol.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qtguvvmp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163kanzluwo.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163psfgvxge.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163imxkbevd.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163sxfhnniv.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wtibgsus.html

================================================================================
来源：http://www.sxryk.cn/163qgkeeoeu.html

E. 字符串处理
来源：http://www.xuanzx.com/163mlagnuxz.html

================================================================================
来源：http://www.sxryk.cn/163phkraxaq.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163fekvkdtr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163fsmqfdnd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wrogrqyt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gkbcglee.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ugzbjazp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163lzxnspsf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fmykxlxd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kafnaxbi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qcfuhqgu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qxbqxnbp.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163asayeouc.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163nigssrbd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fmzmvjrw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iwxuistc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163epgvokxz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163dlhgjzqo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gmpmrbyz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163pjolpgrk.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vmyepxfu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163oumrcurk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qqnkriyw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163msnycxcn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rsmjinfw.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rkfrycio.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163sxxqpjqw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163rhfnlaqo.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xpezyrng.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163cdpdaywt.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163haaljoil.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kglnpwmb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163blaemtjj.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rtvysmjk.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mfoaljog.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163pphfromd.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163gbwgvpxr.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ubyyvqby.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ahlakcuf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163erjfibnr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xjxazuez.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pivretqi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163oabffdhb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jxwagtew.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163frvgvuzj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xjibhray.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bzyyhejf.html

[E06] 替换子串
来源：http://www.xuanzx.com/163rgjqmhtp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163noaquaok.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ifignuha.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dmzwqikn.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163szsxlkfx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163euiecvbr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163gilxqsvy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163lypckdoj.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ahmlzodh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dzilorjt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163aosklerl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xviilufo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163tqujyjxr.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163kbjzziht.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163obpuhjwr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163yqnlyiof.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163towtzuey.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fxezlsti.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163fayreapw.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163twqwpntq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ublcqips.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mwosrwdz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ixjwheih.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vyeqbqgw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dwneiwpw.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ljtvpbwy.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163gkoncugi.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hlmaymjs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163itcbvrnm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ocfakkfr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kvsifegk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hrysbosw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163czvgmgwk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163tcjppwqc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ciehbtgp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163efusynqu.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163wobnbfcx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163limdrgin.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ioyzwzax.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dfijegkg.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jzctohkh.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xbhxhfmk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ifspgjxx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163yagmcjxx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rjfnrrtr.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ljngdezl.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163fzkdtqgq.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163jjzytkus.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xyexkflp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hlbefrxd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163frwjglko.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163flkiwsqg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fhmvwwbi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dyxqpaaj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163gtpupoos.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163agsqvvdu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163kxbzwmpm.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ilafdzzg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uuvnouyt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163byccfsmr.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wwdgwgkr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163buonrfel.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163czxvxqed.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ldrieqrv.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jrhpuvsp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163qqghxlpg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163irlboiws.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nwlcrswq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wadqgned.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163wqfhyvce.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163odcqtibe.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163egecccel.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163etgsdhwz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ixusynwo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dmyehtpt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163yxxbvfvx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163lkartnna.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163lnhbrqik.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163dxjxdttm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163yxispfde.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163iznwbofu.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163hfmajnqm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jhlsxwqj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qnvpxtqe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mfcztgxe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lzupekea.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hkqruurk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163dhmhcobq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mrdqsael.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163nfkcrziu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163wpkwqnqu.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163xsmtmxxi.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163fyvlfmxz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rupmchwx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gvyotqzu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163xwvlxtum.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163pzquhtdx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163vcfbdfzx.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kcmosljm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163gpatxtmd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163gywuuxmx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163punzxcef.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163fsafhbhw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ezcmtsro.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mvucabdo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163blflbxgk.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163erigrabv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163rkrcdked.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bxnxgpgy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163yzjoepmz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ksutbctt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ehkupwep.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vycgkajt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jlraxqrf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ldwydlgx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xaffmljx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163kitjllgl.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163blmhdgyx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mjudpcoq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163tanbznso.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xxjblgja.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nzsbektd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163rvxoroyo.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jbwqvctm.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163tztgkrza.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qdskxaoa.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163fjksgvpi.html

Py:   if not s:
来源：http://www.sxryk.cn/163pkzyklnv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163tjkegkxn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163zchctinq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ynuuqwyq.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mdgfvmbb.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nnohiexi.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163nqfkzbov.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163oroknrhj.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163wwmgiayu.html


<!-- 参考信息 -->