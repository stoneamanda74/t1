外链999!wailian999！

[D11] 反转数组
来源：http://www.sxryk.cn/163nuoarxty.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163tdaucnxe.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ghzgebwb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kkcmkkms.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ypcwozmn.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163toudecqw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163dxfbaytz.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163vtxkdhww.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zgqvzeim.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163enerdipq.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163fofdtabs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jpzngsty.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zuzjjccl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wcsziemj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qwkwpzoa.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163dpbvznms.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163sbftitxq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163kgglleuf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cgwtobhm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163vlusfohr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163oawqgsrh.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hxxurtdi.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163czwmkbjm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163oafzoxik.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fsyxeywi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ldefjpoa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rvhamasj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hfngxsnu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163spvoqxbc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163etiwmcbm.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163viborkqf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ycthicuc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vpbzapsa.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bhfflsos.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xvhhyxxr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bqwmtnso.html

[D15] 去重
来源：http://www.sxryk.cn/163qbmyxeot.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zmwrxoju.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hwgnpzfi.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kvseirjt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163myvpgdbi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163iqydnfgp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163inaazcdx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163cyzfzwkh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163jrpbwjhs.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qoecukjf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jesithkr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163sosddwyy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dqqsrjre.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rkjcjpvc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163gobadhgy.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163bgmjrbyp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163jizgdytr.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jhqeqksp.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qokyfcvv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163xyujirhh.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163lcuabkbp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163nmspcxwt.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lkyxgwyi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163amgbgllt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xhxditya.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wohojcdj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vrwhrhmo.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163abhvikwv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163rpzrsvqf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mlrtewwx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163rzzeyvjo.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163fjxaembs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vaeddbps.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pnnrrzpi.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163covubmhp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163kcxsfixj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ouszmjsj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163gpojqwie.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ldlamwug.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hwmqfklw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rwplxjkx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163gkcibeuf.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163acwciwfa.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rgjvjhcr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163udbkijze.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163oabqydkf.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163fronjdba.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tlcdrtke.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163iuadmewh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vahxqgkj.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ubumedkw.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163atcqvyhs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bbumlmfd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wqikvdwc.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163touqhjxi.html

Py:   x in arr
来源：http://www.xuanzx.com/163iadiowdg.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ihaxoakz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163lsuzvpxz.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163twxsoexl.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163wrpeddfq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163loyfvrgz.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163amujktsd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163wxttzbvu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ktglqwed.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nevojpha.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163lfemtykq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163lwwguwdj.html

TS:   [...arr];
来源：http://www.sxryk.cn/163tmjgxwcq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ofjpvqri.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163roxteiqu.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163nchpbejk.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163jkjnteie.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163cswgdkhb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163pnmnnoyv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163aaigtnxe.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zsbkspgl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xcotyvdh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163hkuuckhl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163tzjqovux.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163lapqykev.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zjrdnskj.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ckosphsv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163udsgfdsm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163cqkkancp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163lmfmsong.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163scuwrvib.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163cbzpmbme.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163pjvsvzlf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dhgztmcn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163zmieqfyp.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pobmoglj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lycycvgx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ixnvpdtj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163euxsihun.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163nfsvhvpy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163bybcqwbo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rslxzzyf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163nkqycdhy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163lpbcxoxb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163xrbcvedn.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163svoyumse.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163oghkzlrt.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163oaqstmai.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163yadoigyn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bqhscnvg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163euwxneye.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gbxfvdtw.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163dxnbrdtd.html

================================================================================
来源：http://www.xuanzx.com/163agktiequ.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lgnttifl.html

================================================================================
来源：http://www.sxryk.cn/163hbzyldsw.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163fqrgmzae.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jbqmgxuy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zubjxxfa.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jnmnmcut.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ibnkoskq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ejgspbol.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163evohqhxm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163sxxfvbze.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163iqrnpirm.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163typrtldb.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ocidfhkq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163cjrctnou.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cxqsprcc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nvfdfofk.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163figcowcu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163oryzvrcf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163pxekubiu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163yxntddkt.html

[E03] 截取子串
来源：http://www.sxryk.cn/163onbpelks.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163fzqlgtxu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zmquskpu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ytohqmhq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163expnfvkn.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jcbbojve.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163sqdehrti.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163hlkijbma.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kvttqkmp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163koncoqjp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vucdrhox.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163owkxaotb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zjkoqjfb.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163svcqtfbt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rtqqauku.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163zsaeuozt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163stwtysfk.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hoefbogs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163kgoqcuxh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163tlaxfhwe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rmisjkmd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wzvntjob.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163sycbofxh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pjuagxlc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tlntglni.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163zrwvyfhy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rtrijtta.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mguzkpph.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ipmfliqq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wovmwlyz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ztrhlkay.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jjtedfms.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163quaiqxtd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163qttkwuik.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163yaknutrl.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163brdccujp.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rbazzcjt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163evvdnaqv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fckwvzdy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163iwkdukzx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jptusgaf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163bdkkiyhz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163usssqbsf.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163zskmvjyl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gkorhlwe.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ioxnbrdd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163kbdslhfv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163iitcwfiy.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163sqrowayq.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163pvimcwlz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kqcmspep.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163lnadtyhl.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163wdbbcrdi.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cizxrscy.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163iikbebqa.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vjbrzhfz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163kwdixvxo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tisdxhtt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hvxeyugv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163dyellpfe.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163examwcdc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zrjaoxwe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lrhmxoem.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ejystolb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163jhxluaug.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163kshqdahx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tznrjqrv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xdrmwtfm.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wklrzlze.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xzgppwyz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jekkajnc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dpzzwtrh.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ywjzaycs.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163zqigbvoe.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cukceivf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163bwlnxspe.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mzxgwakg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zwwkvqhf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dzwndfvk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163byqmmnvq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rkocwcuj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163laabszyw.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qaeukosw.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163cfthyqhh.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bjzczvxs.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uqbtohfp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163pjwutaiu.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163wkwknejz.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163lhlcbiad.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163oqdymycf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163axbfcavz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163lrvefbre.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163injjwjff.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uaowtpfn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xfawerev.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163chuuhmjf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bcecsydo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fhbabkap.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163hvkxqdtb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163gkqnqore.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ynkodjgw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163odlupjta.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ghsbqslj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163jtaptepq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163rkqgedlx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163hejoqcok.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163zsnpxqjz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mxqkhvzx.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163nrbfsvmd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ahgkgdwi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163wgxkpeoq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163kckfxana.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163dxkeolnv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163iqnxacwk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163lqevhuuo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163csvcfmne.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163nmypjofy.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163lhnhqusg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tbttgkvr.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jpqifvef.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163khpzjcoq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dqldggzh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vysanaxs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163pworxtwz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163pvdcbvvq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163usemuscu.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163uhjwqfjr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qrwbrqnw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163nmozgvvb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dnrdljnp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qjuxqpxk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vmfvxeau.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xbtuilms.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163pweozexm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163acpmuezw.html


<!-- 参考信息 -->