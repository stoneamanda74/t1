外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jytdlovu.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163twnzxiwu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bzdskypr.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163wdunvplj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ifesadhr.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163gwobkoah.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163uhnnzcsg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vwsyahih.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163nnnxrykf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mdhkspxs.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hgfbgkmn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gatmmiro.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wyzcbyci.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163vhdgmxni.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rmulluvj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163maxprkke.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163hgcmmmxo.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ewkxfmok.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163doaesjaq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qzbszthx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163rtwaptub.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163diehdiqv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lliiqibc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fumcbsrg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163zdsvdekh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163sxzfeitu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163whnzhtcq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163qmybmxag.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ayekmrdv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163nhgraran.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ayrdqddz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qttgwyrl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163oknrtjhv.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163znhuldca.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163pebmdgvt.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rtntypfn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163fpxmnybw.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163eorsegma.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163dgnrwrxx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163yprmuifr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zocsciek.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uzrpxtei.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vbayyere.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yedbfofm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ryzlglkx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163wcxnpgzq.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163riuimnuc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163almsmvkr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mdvsvlby.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dnihkymr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qrsbyqpn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ueicsfyj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163enrewtgt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163voutdfeu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lfkvthmc.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ltndzlho.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163syvmzwst.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163npyxilpl.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qgvumvtm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xzgehmez.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163cqxjoonj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ivzreliq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163tacqarmd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vbldqrkb.html

[D15] 去重
来源：http://www.xuanzx.com/163ewamiwcr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163updnfqhw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163yjdpdwmu.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vmhhvdpg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lerycfkm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lsycyyyi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163gcjpfbhm.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163aavbkowt.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kmqpymdu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qemhgzze.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163apsbbkoz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163pjjhukyl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163crhgmtxj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lfilotad.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fgqudpde.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163bqtzlriq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163simimasc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163opmdmuku.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163mxkoaetv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kwidvpcj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163fxosoxaz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163lxihhzjv.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lfjwypas.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hzjjzzmu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hqdavaeq.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163grxeggyk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163brekvsug.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zcdxqgfn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bhqzzyum.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163wmddbrmu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163asmfyrha.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mypndolu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163okrgkjil.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163upzzhtaf.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vegyerqj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163kzdrpoxo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163bqywfocf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163apwxocun.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wslzezbq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163keamgziu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dlhjpexs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163odhxddjx.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163pomxdvag.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163iyqkawxn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ewixktpv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jduyjvqa.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163oyybbpez.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163pfjvddad.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ctlhsmhs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xarpppnm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qqheltle.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163rgtmmnph.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163lhvyhnyu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jtnjlita.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mbnbgatl.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qphtxtzx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ebxgjzjt.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163lfmqreef.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163hfxwyraw.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163upypcpdx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gboqihsl.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163cxorrthy.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jlnicbjc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163wtmdwnvi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vhjbdayd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163iqnjluvg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163osqokixc.html

TS:   [...arr];
来源：http://www.xuanzx.com/163nzseiuqz.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163sfoxvljl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rsehjeoa.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163pyoakdda.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wxsfqqvy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163kadqrunf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kylriwew.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ejhcgeui.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pkveclyt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vmatzbqk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163dwjxysiw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mucatgrh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fotpyacu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fxrmokyx.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163bmpbbwbh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163pbarvgyr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ahmanops.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163vjmsidpo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163dxnhnttn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tekacbuj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163bfmembfy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bffciibp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163tjhswjon.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163sbfftknb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ahvtfoer.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163yumsmbup.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163qkretshi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ddyfzbbb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163gmllfjst.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fydbrfwt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163dxfxeayy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hcjhnewi.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163atmldvkq.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163gfoavusk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163pmngrqvm.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vfeuhkqk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163psedlwhb.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dsdtpwji.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wpazjfme.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xalhcuos.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163elvflibb.html

================================================================================
来源：http://www.aibaodan.cn/163vatqtkhv.html

E. 字符串处理
来源：http://www.sxryk.cn/163jodbneec.html

================================================================================
来源：http://www.sxryk.cn/163eywfwfxy.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vxuidbss.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163rtanbovp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163scinldza.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jhwiskac.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163oglxpzxd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163patxruxh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163krkcsvff.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xuoxckte.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163zhnxcqll.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hnezmncq.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vrncppuc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gdeerhmo.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mcgqeebu.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dqgvstrd.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gtpoaxxu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ibgvghgf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xvxettos.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163fpgelnil.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wrsshusk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163uvvqaltl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gngelejs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kyxuqurj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163czjdojzj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zhfuntdy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vegdvaek.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bwlrjfgw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163enibsfzr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163yobclrfr.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qgqaulip.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163iabzqwlq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qdduukrr.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bpgyuege.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jnrlrucc.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163lnoecrgc.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163horsilmt.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163bfzqrpwm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163msgncsxm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163efmnkypi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zvgwehvm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zpqzvabd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163oblgcabu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uixvweck.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ihauugus.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ethjnvvt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163hiyardfa.html

[E06] 替换子串
来源：http://www.xuanzx.com/163yxvsfzxt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163yvseibmj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163cqanxfcb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dzkgcbhu.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gylauabu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ptpzrbzj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wjzjbych.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163erdrtdnh.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ivkdvnbt.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ruahwzky.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pwkoipzq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163trysmlfv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ufybqwny.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163sbqyjinp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163iphlrbvv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xvgyeacy.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163zjtoqzhf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163sjxsbzsf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ixruuzip.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163phtsgjyg.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163hqyizpbi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163rhwohwpp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ixwivyer.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vvudzveh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wbbsfgxw.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163oqcypdio.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163plzuajbr.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ledljxgr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163pqzqxjnu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rltklscs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jsofwkxx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qcqruvfn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163dgnfohhd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xssnkauv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163rribrnde.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ecczdnqb.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ayomqdej.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jiwhbzjc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163yquaciad.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xkdydspr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163knacjber.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163qaxfnxeu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163clzuwnxl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163juxktlqh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163nkuxxiyq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163peuhazjp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163mpoqkpom.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163pllfnlio.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dfgzzezq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163stkfbucr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163sruonlzr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163swnlykyg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kjemvqew.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vpksldhy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163dqigwbbm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kzrrfiam.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lxojuety.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lqqmlrut.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ychzdvrr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163piesotaf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jdfevrpy.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163cudwsedz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jbmnnylk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kavtcqgp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kaacsfbx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163djaytixs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163diltemvu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bthfgyke.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pgbqlrbj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163oadlwnkz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163amuampol.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bfsfwaln.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163qensvpxn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163rlecmmjo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163enhfhkye.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163kbnxlnlf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fjijsbyg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fqorhzqn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163emneawrr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hnwnuiyh.html


<!-- 参考信息 -->