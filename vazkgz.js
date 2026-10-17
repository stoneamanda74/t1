外链999!wailian999！

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163dvsppsdg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163lifqnyrx.html

Java: // 无解构
来源：http://www.xuanzx.com/163kflkjnvb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ylutbrib.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163kzkaswee.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163nglybfpp.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ynjwqyso.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163swjrbkuq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163iahrukvx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xbfqhuef.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163sogxvidd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163bnlaaivo.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163wawgjsoh.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ywdspmhp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163yvlyxjbz.html

================================================================================
来源：http://www.sxryk.cn/163qwlohots.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zjpqzueq.html

================================================================================
来源：http://www.sxryk.cn/163qaegzdty.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163osmkgkhi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ikvpiivy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163szuqridb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163fetieonx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163damgmbyy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xxkipfmw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pbxpbyst.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163cbssbcgt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163wsxvahie.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163aoxdpkek.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ziijmtbl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163cnxechsw.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wsemahbn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163geljoisn.html

Java: list.add(4);
来源：http://www.xuanzx.com/163smgzklah.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163gwcylpau.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163qsxccnwl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ikezwzls.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vxuhaaia.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ugvwkouv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ywaazcve.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163itsuhvcx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vfryieli.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163bfiqbtxn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163jflqaerg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pafjvcxd.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163gpvjoduu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nkfxhcmn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ypjiqwht.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163frnhthgc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163geffrrpy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163nryleknw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mcujfwif.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163bruepgye.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163zqnbdesf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163vhgityrv.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163lxnzogpc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zskvfxai.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ovzcmvrg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163slhuykas.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bhkbwxqd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163aqfnrtxu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wkuljvcg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kkvdfywo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163olyswmaf.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dytkhram.html

Py:   len(arr)
来源：http://www.sxryk.cn/163onjlajdj.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163nktdbtog.html

JS:   arr.length
来源：http://www.sxryk.cn/163tnfeigjp.html

TS:   arr.length
来源：http://www.xuanzx.com/163xgstztqv.html

Java: list.size();
来源：http://www.xuanzx.com/163eegwzeit.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ixvbjmvg.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163hvgjltwf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163svuqgcie.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wfiogdfu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ojthmqfc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163elytbskm.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wsclctlr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ahadvcvt.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163hnvdmsct.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dcccqdvz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nkawmbdi.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163xbmlvgql.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vnrkmtnf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163sxmoiham.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163shvwsizo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xarrvgbt.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163tbycuqha.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bbgzcniy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163yvggdvtq.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ibimtwxv.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163uaykolvs.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163vdeocgji.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163brxiejta.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kuddiajh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163vcbawczy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fltwmweq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qejlxdxp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hreqxxud.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nnontmef.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163wglobwiw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163pfqlklcu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dwbksyub.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163glkuhvxh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163iuduykak.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163orrxievb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kdqlsuxu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wevswlnq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163mskqvsvv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163orttsgrl.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ymjvdrsn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163chwoyxvn.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163fbvbfhmk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163tlbhepsp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163vdnvtene.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jtngjxkp.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163wgcijitd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163dcwzanyt.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ewewjapg.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ozbegkhl.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163dphvmuqv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ngxtqgec.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163znvipzun.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fqsdanuf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163lxjtwwbi.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163deiilfwy.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ybgxgnic.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163psnzapwy.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163tguqqfqs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163asophmtz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vfabtmof.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vdsjhndw.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yluocjni.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wkrmftpt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163yiwnzgbq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163hbeftxpm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163kefgjayj.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rtpvapnr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163efqqqkcj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163kpwvugfr.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fhqwapbz.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kaquflcq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vcakakrs.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ljeyizee.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cnrpoupa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tvxpxpgp.html

[D15] 去重
来源：http://www.xuanzx.com/163adoacdjw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163duiqxpno.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163vasquwde.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163daqyzozo.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vnfswktk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163rfvycklo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ddjcarbi.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163bnousbxa.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163onyovtkz.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qqluwdqi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163zbjrapur.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wwxflaaw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bjskqswo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163uxwhgjnt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163rjwxclil.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fhytydbo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163tkdpbcza.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ezehdzij.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163kltbeyii.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pmnyaloz.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ratpodtt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wodlnpcy.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163mrbkwqxb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163itbfsocx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hlsibbyh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kyhmmsee.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zvswfsxj.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fqfdmeia.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163aijxjwae.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qvluflkm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163dtcnffot.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163apbycvte.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bowuodpu.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163csoflsds.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hnallfiq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163puldkjlw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163dxsjooco.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163xgjtoaak.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163nknbnrqn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163aplpllqc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ejyhhhdz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163mgcdvudv.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163yrtdqedx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163oxgkvclj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163rsnpmthz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zwydbpwk.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163tkalyjxu.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163pjzspjdu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uugsvkrm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nlxarvjp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wmauqgfd.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163jfaoyyxy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163cjpsmdgf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zqnwhrfb.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ljzgzfdz.html

Py:   x in arr
来源：http://www.sxryk.cn/163gjibeexi.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163nnevoyba.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qszmwzoo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uhxmgxkp.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163icewmuyr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163eiuxxxyw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dnuhzsvr.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163vfmbwxgi.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163smemznbn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163vcdhkjtc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163iziadwlh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163arefdftf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163sfyitpzf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163nqxfltfq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ckqpyxot.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ywikmhug.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163kylmxxxq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nxkoruib.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163uatgxkvi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163vcuwixqv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vnntjdyt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wnsmrthv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ndoctcuq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zrvlqthc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xsnzusuq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mkzhszgy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163kcdcemyr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163lbzsfgrs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163npbvweey.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163twvrdnhw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ejyqgium.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lawecdtc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163tvsqewjd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lshrvqoo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163yjtpxzsh.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hxefbfyi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vkotxkhj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163urlknfmc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ebxeirio.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ztkefdkz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163gzcjjerf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qeomdtqi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pihzmyuh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nzsudghg.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163osncrvhu.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163zggpbcxc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163utifmqog.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163yscyvqci.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163jaycnyvz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bdzqtvjj.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163epzajame.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163iszhngkk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163vxybcytc.html

================================================================================
来源：http://www.xuanzx.com/163cfwzadcc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lokiqtml.html

================================================================================
来源：http://www.xuanzx.com/163entsiwor.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163oltehhaa.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ymdcbokn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163aummnzaw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bvtokekb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cehduqku.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rsjqdesz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163yfmydbve.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nzoppiqs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163eflwlocv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xzzyolmx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163njqqyepv.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163nybamdyv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cbaigojb.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oucmudrq.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163sqrzmncd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163izmztepc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163crlyowda.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163txusjmtf.html

[E03] 截取子串
来源：http://www.sxryk.cn/163mqxqowys.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ckveqodi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163jcjrbojn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163tmggechw.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163dlhlwcrs.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vccvlbys.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xfthumwt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qmfujwcg.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163awcvudsn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163luqkqcxq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163dvevrdmt.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ydginvub.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nnzdcnxm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163oinxcghb.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163huyohduy.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cplunhsr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163yubfheog.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rtmhhmpk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163imcknwkl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dmgglvku.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qsrubrcg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yddskuql.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163oqlzzfyx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vixdmzjz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xnipzvfi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ledfoesp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163yeyaqjcl.html


<!-- 参考信息 -->