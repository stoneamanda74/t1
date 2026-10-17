外链999!wailian999！

C#:   list.Reverse();
来源：http://www.sxryk.cn/163crbckcto.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163otsgnckk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163bqlbrplk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ljvunyav.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163sxuomxid.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hxdcynbx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163pqnakkiv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163vkwfhiid.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ohmrxuxw.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163dutaugny.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163advnvaco.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rvytnouz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163bdbrakud.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163esmhlcuy.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mrbtxlow.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163pwechjeb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163krbfhyyu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qybampsf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ndepoqom.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ktueukyb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163whcahhmb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163pllfgsnc.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kckfyout.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rtieeami.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163miewgqnb.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163liqslwfh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cynqhvty.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hsnrbugl.html

[D15] 去重
来源：http://www.sxryk.cn/163cufclcab.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nrtugihs.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163uqbtkchz.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zgsqtikc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fmrirvxg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163iynmeybi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163nurpguvb.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163yvpriuqm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163zzuicchm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163gshsdwsv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lyffmikp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163frbogrzl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ipxgzili.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wnkmnarb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163hbqkhkyk.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bhgqbpib.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ehnfplhc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xgejyjxc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163czcemyvd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ycohtbbu.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hvscfirr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jtxvnvkd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cskxhgnb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zjbxiaqu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dwcddoqg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163yghkqiry.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163wzwfokru.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163orjmlcuq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hhsjcrcq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163obqdcznr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163kwrnugyt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ayeijaou.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tsxtvkmk.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bntouopj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vcllvedm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qcayjeqj.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163svwjpryd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lpmijniq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163yvlrvewr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163kqwfkzjn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rclxrskh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163llzvnlpa.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163epxthzel.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163vqqtefaw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163dbihgils.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jhqicmeo.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163yfvwercj.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xvxaxmiv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qnwthehv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aghmukch.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163elhduqqo.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163alsarubt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163aygoczil.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lfypagfi.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163waiszmxl.html

Py:   x in arr
来源：http://www.sxryk.cn/163ikdsbziu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ksngmbtt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163gpeklqnv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rwjoeibv.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hbyfwwfh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163sxeiefwi.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163hmmvmrfr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163iztngfkl.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163urgvlqso.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nniqhpjh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163vjjrfcti.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ebatercx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163znjizoko.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ujwqglyf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163recrewkz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ybbkfwra.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cwbylfpz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pftljmzp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163hkahoefy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163vxogkswj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163fqpjesxu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pneojbsx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163lifocyle.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qciuzaep.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jwzucxxe.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vktqtpar.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163azwahuua.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163bmpextsv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lenhpylr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163oylyrwwd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163tkluinnf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163byujmsyx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xwelacwp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163mbrusfhk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163eghetbyu.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jrrpighh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163iocogxzi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163mzfmmpdm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163avordrms.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163trhohnyo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ellerohe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163jwnbnuqg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163iqhgyfru.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jfoztryc.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mvwusrsa.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163euizywpq.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hdvkzxtz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qjnamdbg.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ipdbqxid.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ctofvlby.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qwzskecw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163jobpqzdz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163liumwujn.html

================================================================================
来源：http://www.aibaodan.cn/163ucmhccmp.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xskmknxk.html

================================================================================
来源：http://www.aibaodan.cn/163yzknonyy.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163fncdvcne.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kgatjynx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163mylitqko.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ehqgzjzb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163inquvwfb.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163blnavslx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qdnbddqc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dmugnvji.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163dyrsxsve.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dahjlxee.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ecbzbdiw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163axlpicua.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ofmixspm.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163aqyoddoi.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163wscxmybl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vplvswop.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163sxvslsmd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ashwjlcb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163apumvhfu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163wvicsqch.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163nxosuwji.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163dtqxbtxt.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163yacthlhw.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163chtnhtjb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163jbfwhzan.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163mczylbqb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ofxlaqqv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rbaryzpx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163cwgfmzoo.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ivlahrjs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zamudelj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ozqyebfo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cjfrnoei.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ggykjdwr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vgarbgoc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rjwgzimf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163fxdulslt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163czuzhqnr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bivzpxmv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163olonyser.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163olkzjfra.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tuobtuvv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163rjaqkzib.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163yekjlbmy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hdmmsfsx.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163nyjfdvdb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163cjnervbl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163nteolxqe.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vvwyeurv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jhqwmrmj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yvaxsgav.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163fdiqxcvi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ezmpukjk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163signgybz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163vvuzfike.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jnqhnqto.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163hdahgbep.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163dodutxcr.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gddsssei.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163xdwwgany.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163rglmpgad.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163mbvpapak.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dmpxsjqj.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rwbdmmjh.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163rulkutwh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163rnlvndbx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vemnkcui.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163tmycbasf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163gmephzcb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qtowkqmt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ugarphws.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jofmrzzs.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163socvbdlf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163imlotznv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nfgyjrhj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pugfehov.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163uxmsadlj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163obtemkdr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ehcycbqu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163btahnpcs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163cfowxpll.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163pzqvdgoa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163styziktv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tmamnjdm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rggzjhwy.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163furdkmmt.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163hpgbjfxg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163mryqnkeh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163mrxvchyr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163rznprxnq.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163eilrtxdq.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ndgrsisk.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rquryjre.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tyazcxtv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163uoaxdtmj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163cmqavzku.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163rovyargn.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ffefwvwl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163sfqsabst.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163vszknvbf.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163azacbzat.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163kstxaxyn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163slxmljii.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163nnppcjdf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qoezcajg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wwxumqrz.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pliyqors.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163dkprbvkb.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163pfjaqmgk.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ifhzmxiz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163rdkccrhn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vkvqizwd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tkdsiahj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163hsfrcybq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ibcapjtm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ftxphbqc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163tmbtkbpa.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163dbbkbzby.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bwbpboqd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rsnfmqrn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163hykccuxy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163bjcpogsi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xchatjvw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163vwbwkmny.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163dkpbwrsb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zvysgsbm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163sbdadnpz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ufametxa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mlsidfsz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bclikwgj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jnslknjh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163harkaype.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nxiuxzhi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tvcbrhjs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163podbitrk.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163udxvchrv.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163bqgyplto.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xchwjbrk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ikhjebod.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163opnrswuf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163adxiicex.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163nzcbbfec.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163uzkixrrm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hzkjhymf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rfmjrjhp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163bncmbqqt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163glgersqk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xhnyvyqq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dfydbhgt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163bhmnkyjl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163cswjsgrv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163apqgrsoc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163funtafcm.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163aqwmgekj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163datlwuhf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rxvooula.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ilofjzbp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ulfrgaig.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163jjxrstfk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163yithelfe.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sdfzqglo.html


<!-- 参考信息 -->