外链999!wailian999！

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163txrrzteh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163fxgdjmqb.html

Java: // 无解构
来源：http://www.sxryk.cn/163brcbnudk.html

Go:   // 无解构
来源：http://www.xuanzx.com/163klyfgddx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163jrhlndqv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bhnaxkbv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163tjlgpmkq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wumufejx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xgljxqea.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163vgxsrrhw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163mkkviknj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163dzpafwwe.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ugaymhvs.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dpytrpkl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ukuzaqdi.html

================================================================================
来源：http://www.xuanzx.com/163bcucoaly.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163bzozdhhu.html

================================================================================
来源：http://www.xuanzx.com/163cjzymhni.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163nltbxcpn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vttbvdmh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dkakljmt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163iupuuvco.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gwkojuxd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163gcgqcbga.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nxaobkyn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nufiqqoz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163kdhjzepb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163tjwlvpnj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jducabop.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163sanuhmqv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hbjakusy.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bljnisxd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163bgrgbopt.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tdigbhkh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163mgwfjoos.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163thhwrksp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163jvjhinvy.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163fespdzip.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163unhobzjd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163usumzppi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ubxaicfy.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163jwqyfbai.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vllnckzb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wdazjner.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163qfxvtkwc.html

[D04] 删除元素
来源：http://www.xuanzx.com/163cvcxikvq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wpxaqxtf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jpnallrn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xlrhxveu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163uyyoeyug.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163amkjuslp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fbmpfvnb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kmtfksez.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163swtowzfy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163hdtdjhel.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163edjguoaq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163elyteavr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ruvvjwuq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163srmtfzrl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jvnxtgth.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jurkxevj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163apoqahiw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ollbibtb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163teykqxwk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163vmtbblqr.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vkoluuvv.html

JS:   arr.length
来源：http://www.aibaodan.cn/163nteztbng.html

TS:   arr.length
来源：http://www.aibaodan.cn/163tqfpfnrb.html

Java: list.size();
来源：http://www.xuanzx.com/163ofpiaspw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lapcmrgc.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lvtwhtyy.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163eseebzmq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wpdcqnmv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163wwfnimdk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dirgebtj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jtkjcpje.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kteldohi.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ormfdiki.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163gezmcehh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ddmwitjm.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163vygroqii.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163irlggjmk.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163nlecrdjv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163wnpeiqpr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163xlklnahs.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163wtlhtjxm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163dwufozjb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163gtjzfmxy.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163fexpmitx.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163lfypzqra.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163mhukkxwr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nxuijuxx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fldvidhg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163okydprpz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163scjjhkyh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ynnlhtwu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dhwusnqh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dyvxljqa.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163swrrbgei.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163omybmxmn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163oprzcwsq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163khzpffzx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163cjshfude.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yaqkrbyt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163wakopkuf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mslixafz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ntvjzrrj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163mvxkehtk.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vdtahmcq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163opidbazo.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163frvtwvxp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dnhksegv.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163einyjmux.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163veihymyp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163trvfiabr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163omivvsii.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ldanoysn.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rbyadheh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rviubtog.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163msvzwfxq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yszjwkee.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rxkegobi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163yzbvwbgm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lpmcszeh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163yrvgpjcw.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vygiavuv.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163oqfstlbc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163noopbbsz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163nfhdlact.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fkvzhkci.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nkrswxzm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ygrwakqg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cxaojhno.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vltttmim.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vhvdptgg.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163kcgijhfi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hflgrlja.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163tajlislw.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163elljrkmj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zsphdnqq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xzpnorhr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vtdgszbw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163kgnkqewy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163bjovfjcp.html

[D15] 去重
来源：http://www.sxryk.cn/163jotmzsvb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mmovdrlx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jdgmnfuc.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163sstrleev.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dyxziabl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163yimuvcdb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mljbqaqb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ufpumoni.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163tcfzpnpz.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163rgjdeqxr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163cpowuskb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nlfofvwt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hrxxhwyn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ibjcofke.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vdwtvxvy.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hjdcmqrt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163entuyazu.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163uzfsrfrb.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bwnhdfcn.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ggnltmwf.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163tldlfvxq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163zmjobzoz.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163femclsji.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163umcokdsh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mbahcdhp.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163czcolvlu.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163icbvwttc.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163kvlsbkgo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163joedzxun.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163huhqtgzf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163lmxtbjzk.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nztrhuxo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xkjfhsda.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163owxuahvc.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163krglkbza.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163uedgareo.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163gglagxlv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163bwzfblve.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163gnvsmsds.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163wlqpjiro.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tjugxbac.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163cpzzfqxe.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163pacrtujm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163vnspuslj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wnebnblx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163sctqakup.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163zelxmefa.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163rvncegdc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kvhypllj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tcwgrpgf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rdyoyter.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163felzbzjk.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ytwtuzxu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163eydwbisy.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ehwlrhlo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cuykxosv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mdvdejdu.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kbaxdmvz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163ezmocxcq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163pesdaehm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163wyebrhxb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163kzmxfwee.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163xxnbewrf.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ltgltobg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163trfbdjtb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163lugmqzuy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163xkxyywyz.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wsqpxmce.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mnkokrqw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lfkkbgez.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163suzzpmbq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163lwpvwpxp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nwzfznxz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jdfmdkmb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163lkqumuid.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mfjumahp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hrbanfpl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ujzlgfak.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kdyhherh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163taiggsyl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163dtqqfuuf.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163umiymfps.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163arhchljn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ugyqhtwj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fvvrgncv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ahjwruzx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qhkpfyfl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fadudzzm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163iztozjxz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163thvfrfza.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163npqfqebx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163agfdjnvy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163eajztknm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vdogezeb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163uurejqgr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163nrxvgfct.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163eltguwqz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163aeqqlirc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163sedwmwws.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wvdcadkb.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163rxsyjoea.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163izlymhnv.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ybelqvkp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163bsezgxil.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163wpatziio.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163azmbtydq.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mkdcdxud.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163piakonge.html

================================================================================
来源：http://www.sxryk.cn/163kgtznbhb.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rslaodxj.html

================================================================================
来源：http://www.sxryk.cn/163eiuhmrzm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163pzeenmwu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163lltkuuyc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jwjklasu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ertotcat.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kppnuqdf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163cbknlyjm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pvowmvrz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xzdhzuae.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163mfbwpjqj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ymwwefhb.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ketpnbkc.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163yxselqht.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bcxnnwxj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mmyikjfc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163dvdexqnx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163rqycowqx.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163bypbnvue.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163klvzyxoz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163dgyvoyfy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163nkvpazms.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163gldyjxtd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163uztkjebd.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xocrhwsn.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163fiiuvcbt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163uhqlduwq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ttgdsbxn.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bfblnyzb.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163oxnawchy.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163rrywsvzn.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163bbulesrg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zlxzrmrz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163jqlajmbs.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163trzifwjt.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163zumwtask.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163trzmyqbw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163bdchzehe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wwdtxwzs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163aimaxyxc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163srikpenk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hcltvbhj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163nucjmjke.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ynuhghfe.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gfgvdplp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163taysopyu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163elcuuuel.html


<!-- 参考信息 -->