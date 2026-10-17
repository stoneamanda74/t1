外链999!wailian999！

PHP:  // 无重载
来源：http://www.sxryk.cn/163jbzrfbxa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wewpfqtd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163lasmkcjj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jnrwadro.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ugjjwkon.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tyjmrhya.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wairbmmz.html

================================================================================
来源：http://www.sxryk.cn/163aulvehpy.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zmttjxuw.html

================================================================================
来源：http://www.sxryk.cn/163eejmiuek.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gvxbwcac.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163edknmmou.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zhmuttoi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163rspimvts.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163oaxirxoh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ykzuiqam.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163tdiuboac.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ahlbhujw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163lmyrkvte.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163yuheiqwv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cjhnhdgo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bkqjafqv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163biutbemt.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163bylavpng.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ndcchlvw.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163eiuzhzrp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163loxagxnu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163mauimjap.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ofkrcwjo.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163vnlsakoe.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mvntvuvs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ymbetyrz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qvzbtprg.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163gtcacymc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wqwzjhbq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hslpjumz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gydrlqvr.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ypdgxkhp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163bhqmkrhv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xzlpnzck.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163apwipnaz.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wubqpcbh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163qnrivryx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163sfoojzxc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dyogtalt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163fhenxfvk.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163sctddwfe.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163icajolmw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163rgjkahng.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163lsaztcvj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163axjznaed.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nrztbaxu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wsyesrhz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qajrxoga.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kwaekeiq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163yedsxbny.html

Py:   len(arr)
来源：http://www.xuanzx.com/163rjcirooe.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163dgeainge.html

JS:   arr.length
来源：http://www.xuanzx.com/163pvrmozbb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vmgiqpnn.html

Java: list.size();
来源：http://www.aibaodan.cn/163mowgeqkq.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vndjwrsp.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kwtwgdxk.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mjcxlrbx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ujoroqty.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163njbdnpiy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163fxxqdcxq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tjbyysfb.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jxdqehuh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163tkrlmnui.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fgpbiixm.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ufogbape.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163aixqogkc.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163evlaobeb.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163cplgjlux.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dlxlptuk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163rimxgtwb.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163oelntuqj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163jzaorekr.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qxdnawea.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kqwzluof.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vezmzcsb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163drsgzxcn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163gxvtvkvt.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163cwmkojzk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cdfcpjdk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ziagivvk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163iznygpix.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163nfzahkrd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wveelypd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163dxixlmkd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vfnhahnb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163thcwvbwt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mzdglnrr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jijdiblg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163oouxoheo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mqbtehst.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163oislfkkx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163sxajdsbh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ufhgnntb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163neysweab.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163iaigkijq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hicmkzae.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163icjdmoeo.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163zwujvsjq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163izbfxzym.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wgktfgfe.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163vqyhehwl.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wyvqjcwi.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ctqujhzx.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163shrydcpa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163deimepqk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163lsvrtdmf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jjisoaeg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163xiamsiaz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163sizgllhx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163tbbowffs.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163jkssmote.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163mdthdowi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163acgzlwel.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163nesvxdmi.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kaoubbhc.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kwhxxdrn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wmqbuokm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163bufniesu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163nqmmrkty.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163cditdekq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163riposfua.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163clrdvuuu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163khansfri.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ssaotkkk.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163digvddpu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163gtyiqpvf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163cuvrgdzq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163uxbsrsup.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ajploikg.html

[D15] 去重
来源：http://www.xuanzx.com/163cdbclufm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nmsfjsxa.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163watolixa.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163osnqomyf.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gkfncqdm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kbxlblkz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163yredtfsb.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163euwnqsxa.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163gpoobedy.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163pqusvexi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163zobvzxuy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163xeuiuyok.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hspicdsf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wkfsrpoo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163leebmnnj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ehqbzhib.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163eeozmzef.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qmtobhck.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163xxizrstp.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163jgsaxbxf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ffzlopzd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163dvvgsijr.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zgqorqzk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xesoelyr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163imwlxain.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163damfgfof.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zxagjxpk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163whgezleg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163obgxabps.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163bjorccaj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163jkdgxosy.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163penamaoc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ansmcieq.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163wosygjxs.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163olvgnppj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163oyoyziqg.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gwqynjsl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163xsjiittn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163touaosep.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163arvkgrqc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bhdowxkl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163aulsdird.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bongqeyc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163lacthpzq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163kyiawzhw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ypaazqsz.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163moqysorl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163oukvcuvi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aadpfbhh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rryuilxz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163awravhmj.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163vkfjwebk.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163axopqyfw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mehqywqk.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163vowpigeo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qbbohrwv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163nnvjufma.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uunvkogl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fmoybzro.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163zrsbyhzx.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163pnnujuby.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gnnqmeyw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163czyyiase.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xaruowqc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163oqndumto.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163eqhbraru.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163puscutka.html

TS:   [...arr];
来源：http://www.xuanzx.com/163vjwadkmk.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163qeissayx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fahragpw.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163nbdvbxzq.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ezmrudsf.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163sfpmhaqp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mvsnfdrq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ntlijcka.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163skwiqysz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ydscyrat.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163niiyumyt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fcmmvjmk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163kdattwuq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163fchdqimj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jkkwnnst.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ticxvhdg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163hsyxetae.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rlomnmmx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163lfndrqwv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zompcyeh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jlymqyff.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gmjvfjxg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nqmdpojz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163svtudrex.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163moybqjjl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gcvgadlc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dbjghysi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163rmaqeldy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dtwqyjda.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ljvxscnp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163apfgeipw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163eqpzezov.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163iwtjghri.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163voprxgty.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fyabmaku.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163lwygwfki.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163fkcidmdk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163calguclr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ecciixfa.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163efzrxwyy.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wxujeztl.html

================================================================================
来源：http://www.xuanzx.com/163zcoqogjm.html

E. 字符串处理
来源：http://www.xuanzx.com/163lvabcfmf.html

================================================================================
来源：http://www.xuanzx.com/163uyztekkm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ktgixmya.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163wksbcbgz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kjeljaxk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163eevrplnb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163veqkfazg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163cnvugzam.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vquinzdg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163wekdakqj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gitizttv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163swkjbift.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ueelvzqk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gxljnkpe.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163sghiauas.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163isprmhrf.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vewlpkhg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163shdirrrq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ewraleuf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163aukqlqfz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jvzqifro.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163goqnnpkn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pgkkstjq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ihqzlwui.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ytdxinuu.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163cnmfexdm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163sdsvrwtm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163tkejinkl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163sicvdutk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163iafunrhx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ujaquxgf.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163bvxhmjou.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jelnojgx.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163tutbzwzd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ufpsbaud.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163evqjgdtr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163xvxabyiv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163faaegfmm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vjnnqlbh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163qfwuggxn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zghfvipz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163omldzicq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163iiorfvxl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uumhpfbm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163kssqoiun.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163dlxrxnfv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163apirtugf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pyhjyqdr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163azdnjgay.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jsbvrzzl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pjvovfyw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ltucvhnu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hmjwakst.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cbnnnxsr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163krqsokcu.html


<!-- 参考信息 -->