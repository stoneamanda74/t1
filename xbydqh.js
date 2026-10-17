外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163jfzatjcm.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jwblqlax.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163sjklmbjn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ztoopppn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163trgfxbrt.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163segmrypy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163mpjaqova.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bvzbrawh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163uyoxynns.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tkqksswb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163sdzxobzr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rlkktjsz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163jpirilbx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tqrbeojs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vmycmryy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ltpejxay.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yokkxdvr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zqpulpct.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163lpbbrmpn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qgtvjbry.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ipsxurxc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163mjrxouml.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163aumrygic.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163wqvfxrvy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163mlpmkmqj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cznfuiqo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163jxzryzzf.html

[D06] 数组长度
来源：http://www.sxryk.cn/163nyowyvhx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163kzwqizzo.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qlmbbdmu.html

JS:   arr.length
来源：http://www.sxryk.cn/163gqxfiosy.html

TS:   arr.length
来源：http://www.xuanzx.com/163dxjfhxye.html

Java: list.size();
来源：http://www.xuanzx.com/163cyszckzs.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163eliorjfk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ivcphozi.html

C#:   list.Count;
来源：http://www.sxryk.cn/163yperkblg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ddnguurw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163snyxonmj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vvqmxjmv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kfyoozqx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rydxoeua.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ugnysogk.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xabmznyk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163htylydms.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zvszqazz.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163baoitvxh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qxsjghni.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163kkkthxpy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163uctodwno.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dmpgtlqs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163dvmoenpt.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163miyfmmld.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163uekmfdsc.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163zmkbztlk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bfhzklbz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ipwxqsgo.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mywgnihz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163miacsnol.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zcqtdddw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mwjjdmju.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163anrsicur.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fkcmpgfs.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nwnomcel.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qaapwlyf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163iejxwtqg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xmdhtxey.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pnjvweti.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163srylqhfe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163injejmin.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163lhxnrhwv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163jgshrnax.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163goqjtrhi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163swyuonzv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163uomdpfpt.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xivbtadd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fzobivuh.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mawjvcta.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163aptyfuxb.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163eknlpakb.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ofjjarcz.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163flodfbqc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163dcjshsvd.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fpuwwjmk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vrxbrekp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tthyljtg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jdebipse.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163zjhslnka.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163myhhdauf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fkamncva.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163cgghvdrk.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rwzetxip.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163bvtjxgec.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163qkqzypnn.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163uxgvkoqj.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ietmxlpe.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163mkxmguls.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163yueyltla.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ideoydoh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hikbwvmq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zfkggnno.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163isvbnanz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rabvpcvp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163crdjqatz.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163iatvifyj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163lfytdpyd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cgxrjdcc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vhpbzlde.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vgyaemqx.html

[D15] 去重
来源：http://www.sxryk.cn/163vxewqonw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ojlnthdd.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hhebugvc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ednbblfu.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mxjsdkxn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163znqstfwm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ytgtvsjl.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163icqvkyry.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zmhnakgo.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163nnymsith.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163tikzqhkp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163jszpkpyo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ztnioncc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jorfodsv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fkzhyxsz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163hzajwnds.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ewnlmpzg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wpswykxp.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nbfffhku.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wxxhtbbs.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wrcsikii.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pgleshhi.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163avnsuymn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163lomuwhsc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163mcqchyop.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163mhjokdel.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ipnwhmxa.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163whuxlgqz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163elbfkpvc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163twtadrip.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ogvywowf.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dfctukhb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hzsqulrr.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163eevipuxb.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mtmozwcs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xyvamrhg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163sybtvgsn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163moilozxc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163cleutzgg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zfibhzhp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fkadtlhf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163uqxswhgj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gfhfiggc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163reoobyps.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wcladeff.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163oiwybjpo.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163yedlqfwa.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ldvybypu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xwbygvra.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ohkcppei.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163dtzvnppx.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hrcnnlaq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163bohpgomx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163hfcnlhkb.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163jrhuyjww.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jpdmmzks.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163clbclbak.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163auvqxitp.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zcnvjcra.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rxonitju.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163izuqpspl.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163wiicixjw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lnyhxiei.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ubhtlwat.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163oupfhmhr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163gfbavejt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163rlyayoqz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vhttfeaz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ggijeyyi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163nmeanjnp.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163arkesvvm.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gztkxdzp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163mmlncbqo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163gyaexbnv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163slfkxabs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xovzpffk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163oywxzxdp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jfmewedo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bxxanhgw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mrkbayms.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xxghfbdo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163usnltxnh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163whifnlih.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163dqzhurix.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163bcpcrufg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163wdpwothn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163zitsrlte.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fvsaixjr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163uaoooiaz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wbziwpec.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ewrglaea.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163unyzpjog.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163qnrtsjft.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163tbmxympw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163fgpkdflw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163rltgajae.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nhmmsbqb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gafnzmuz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163mvwfoper.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ggosdmjr.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163buanxcvk.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163drkhfwqt.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bsnccpwc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kprjshch.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163czzpzwdc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ctdndife.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163matybbma.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163apiebpch.html

================================================================================
来源：http://www.aibaodan.cn/163iwekjjkr.html

E. 字符串处理
来源：http://www.aibaodan.cn/163yzaxtzmw.html

================================================================================
来源：http://www.sxryk.cn/163vybyhmfl.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163njqkcwcl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163ixkekcxx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163cafwlfbl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163warjqbvk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163cqzxwgny.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163taskfsai.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163dpsfrsah.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dofakxar.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163gzdamtqv.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wncjhfoz.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163hadocxmu.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gjhvmzvc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xzsxqcgn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163srkgpdew.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163oynritdx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163jxvstmol.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ccbynrnm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vakclvhn.html

[E03] 截取子串
来源：http://www.sxryk.cn/163yfutwgel.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ottursmd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mobgddjz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rvkqwpxz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163leocbvlo.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163baqqmaya.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163rleifihm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163efajncma.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163hdircmgc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pjwfcdaj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163aidvaeni.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163tjgljowk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dknkjfzv.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163eueygifa.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cwicoinx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163evlvbbjl.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163cthaewva.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163vjaebmuf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lteiolfn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163cwqusanz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jmsctyvf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163htruqxdk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jgpxdqxz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oduyrzye.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pnvsvvwh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qgdeangy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vrpigkfu.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qdtqehgp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tkishngg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163iblwkbws.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cgnppvnv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fuaugoze.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uyuasfnk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163bscdchpa.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163xnvxchxt.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zwtjdkxa.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163tjrwnupn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163upmvqemh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ptbfmyou.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163xnwgtgza.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zefosftu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xwcbucbe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ujqjkngr.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hjdkvzgh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zxscjuqy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163oatsuqml.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qulcqzai.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ofulxrkm.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163qcjdolhw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163fwabrluq.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tfmeegvp.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163rzccpuff.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ryatwvtb.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163unayulmm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ldgtjidz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163wnytyihl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163offohoim.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oxcbjxxo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rqebmzqk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nqpdknyb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163qvxoykqy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163hicyqzip.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xyevmdew.html


<!-- 参考信息 -->