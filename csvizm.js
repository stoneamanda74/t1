外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163bcvahnkj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163nhbiefsz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gktiblbj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jmrdbrun.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163erlvhads.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nbzqiegl.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rcabhbqw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163kvuqhmbm.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pnzqshug.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163njiposaw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163tbryupyl.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xzbbqgsf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zqzfowcx.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bpswqhdz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xdwawtmv.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rbgjvtvz.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zphpwixc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wwnychsm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lojzjdbf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xnkbzxag.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163lvromsvx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163pjcdyxor.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163pdtvargw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zbkxtfgv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163nqqshnej.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iutlevhv.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163mjzvkndt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163iozxvnak.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fjmwntog.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pucjwnyh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vwzlpgfm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rdabwize.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163szghzbic.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zrrlozpd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163unpiislp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jlrwskey.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163uwfyyele.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163achsnhyg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gotzqstu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163bhcabkda.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163rukcjlem.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163byzjzieg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163iixoohrb.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163elchymno.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gfwjgrnn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163sjatsosl.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wbiwpfjb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163lmodbbfv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163flmnlrwm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163quescnua.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163kebruccb.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xiiffgcm.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163kycevsyk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163gqbbrfsd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hnjcuajg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163tezjxnmi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163dhuclpxy.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gvfybozv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jdblpmfz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ttprskht.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163mfwsxmtt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163nsrvwzvp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hamoavuu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cdmhvsdo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kqwuxhtv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163tvmxqose.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ucmsoabv.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fekwhlht.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fojyxkfs.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sqfhbodc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163aoyxqgze.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163cdfamhce.html

[D15] 去重
来源：http://www.sxryk.cn/163jhnsvrmo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gaizfwpc.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ohtaxbow.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lmdhmuts.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pookbyzr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163tgthmlnd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163rgesrupz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163mrwepexk.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ycsykwrr.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163omrgehjz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163yynklkxs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163gcgittnd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163aygwjtrd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ujchxdmk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vpkafaen.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163doswhlkv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163iovkxxii.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163remlfkkm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163qoxewtcn.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163kbatjonv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163cpuxmwub.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163tzguzoxu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ifnbbfse.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kiwuzegy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163trhtsprg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tsccluma.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163wgqhzmxf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163nkvbsthe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163rumhiozt.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163tfvbecmv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163wckepdus.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vwykieuj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163hpkwwjxa.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163uqauiqnp.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163rxezxzgg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nmxqsdfo.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tvomauup.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163svfnqrpx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hiqiywsz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rbnqymto.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163gbgyymcd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163sthirrzt.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ttftnlkj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mtsyucbt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163cetootuh.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fkmblygs.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mwtrsdgp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163lecaafwr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ymxcknlu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hrawauyt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163xolxjwps.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uiebburq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ckpvyabt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163jgettxip.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163apcclfve.html

Py:   x in arr
来源：http://www.aibaodan.cn/163tujhvutz.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zamyjnug.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163migktmkn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xygodaci.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vfalhidl.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hmsfefbj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qbynxfje.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163itauwsie.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163rzhaitcd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163pueuunzy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pfxvfzkk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vvztjkpt.html

TS:   [...arr];
来源：http://www.sxryk.cn/163esdlbrdd.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qxtdxbzd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rfimlqdx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163fefsnrlt.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163kifmvqwu.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163lxyfnvdh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vkeyyvxf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163swbltipy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yfcpvckn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163eeuxzmae.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jkxrnnvs.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yifbwojk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163dvqrmuna.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ijbvavvd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kkcpmhlf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163iqgtgimj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163anviqqpm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163yqfxpubv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163upjfkekt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jitxqlug.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163errblthz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ppgxmzjz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163oqyzxcrf.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163gpbdzcnz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163lhqvehxu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163homkfnjk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163xqerxmef.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163azpterwk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163jybxgqsx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163chveazxz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xtvlkyih.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ikbcjmzm.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163fscatflz.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vwqlcnjp.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163wlxbqwxu.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iddukifb.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163imucpvrn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xknybwud.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163uznrlezr.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hgntzuhp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163secnlbto.html

================================================================================
来源：http://www.sxryk.cn/163epzyuvur.html

E. 字符串处理
来源：http://www.sxryk.cn/163ihgxezuv.html

================================================================================
来源：http://www.aibaodan.cn/163chateowg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cigbogwi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163iauydsvz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163qurlpkxn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fxldminh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bdmkyrko.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ulmwrddp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hpsbiupx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163jsolyexy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hcyprtgp.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hxxlbaxa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fkcfcbqp.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163dymaixqk.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ippbmnii.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zpnxgchh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lwpmrdxy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163bnibxvde.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163wcvgzicw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cpzmheuf.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wwykqxzl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163udjbotmu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lhsixunk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ekwjknin.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163pkbthsgo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163yiootzyu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163rxussxse.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163julgmrkz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163zblhrbgd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163mnaaemuh.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163bmpcxtek.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163heuxieas.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ismfvqfz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163neoujlhh.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cnjgqiht.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zhkbgvut.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163waawmxhn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163akspwrmk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163aqztqtua.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163aibloljg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163unugcndg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bbnbfrie.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ddvjnqzk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163secywnrx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gmovmhdw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163wvpnumar.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vuahqkyr.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163noulpbbc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163eugdlwrv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jqdoghqk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kzvkmeax.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bwepqeub.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ttecmqea.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163dkryfnee.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kpeovidg.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tqdpvadl.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163atvuwwde.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163efhzcfqp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163gtrhrxhp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163fumqvezb.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163eunsykeo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mdxiucnn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163clkagvjp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163sotzfgqu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163weckbykq.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xaffbvgo.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163urghpdaq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163obkobtie.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dgxhuatw.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kwjpdlfz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tursntpa.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hoblbiwy.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163goxtsmov.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163obrflill.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ipfacojq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rndxpoti.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ptzkprit.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163easlqtny.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jzwyomlv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163eiradrvh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163igsqtijg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ldcknbhi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qqhfjxzr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163euoyyhan.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ftvjvhmz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zngjajsl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vnucctiu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163azpujzir.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163rzigwwgr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163laukiyjd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163nffmkkrn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hlkjxcvd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163uqrwiyln.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163kgxnrlqp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qofptqea.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ljrsutpj.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163htdzbksf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163pqdnoney.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163qvolklxr.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bjktzuri.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wncrotrn.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163aoykftja.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163atgvrwwb.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ajjuepje.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zthmetua.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jiodsxnl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163obkuzith.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zcowtukq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bgafizfu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ottknele.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163tdryfmst.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ciyacnbj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163qbmyygvn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163smzcwmen.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vtwxzzgh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163chicnscp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163grketqrv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163hndazjno.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163wkwkfqin.html


<!-- 参考信息 -->