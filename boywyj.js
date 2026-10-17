外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ttwhgtbc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rixntnzq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163idlhyxoe.html

================================================================================
来源：http://www.aibaodan.cn/163ydmkdkpo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ybcekqgp.html

================================================================================
来源：http://www.xuanzx.com/163oilnfomi.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ajjiiqff.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163arxnixns.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163iyxkzeql.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163dqyhgawh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163mhyirspe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163cyubsojz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ftpmyuot.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163tjowenqc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nllubrdm.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jzvetkwq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163hhkkxyau.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vrgjhmnv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xwhtqfko.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163olznrnyk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ppduhmfx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lxqcgnyj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163kfbypklc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163gamfbwng.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ilgihgsu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163djmrkkkl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163oyphfnsk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163yztznslx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163trpumubh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ytojbpqk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163iqyvynmk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163spwoxpmy.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163nkrbziox.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163fdcprzkb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163unfbgqlh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163fhczqage.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kshxmgaq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pudgadsi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163demvhvib.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163njuvkvpg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163paeqivgi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nthchbup.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fwybxohv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fbilveut.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gtsdlhug.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ivrvwrqj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163lwaslgzz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163cgdnkbej.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163kliskdjn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yylchzxj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qtoycyzt.html

[D06] 数组长度
来源：http://www.sxryk.cn/163aopdoybj.html

Py:   len(arr)
来源：http://www.xuanzx.com/163piyhtpfu.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163uafpgbph.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rpbulokm.html

TS:   arr.length
来源：http://www.xuanzx.com/163xpfhsodl.html

Java: list.size();
来源：http://www.xuanzx.com/163hiykwdzg.html

Go:   len(arr)
来源：http://www.xuanzx.com/163fbjkpjrj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nmcgfyje.html

C#:   list.Count;
来源：http://www.sxryk.cn/163iseqdbeb.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dhjtlqqn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163pevfzars.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dufqqozz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ydnpkgva.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qwegtgsv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xexrjghe.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rihtklwq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qtytpqky.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nyirfdci.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jevajrnh.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ummxuwng.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xjqjhidy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163aulcoerl.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163obffikjt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ymamlxou.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163uvingbkv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kqrdnluv.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163awhrgbjt.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163hllzjgzj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ienrdajl.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vkwgybra.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163fsaapikw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163iocjebue.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163pjpnuzrv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163gqbpbjnq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eaynvkug.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ubgfoxfl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qlgtcppx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163sqoxxplk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bwfnilcm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hcdinrrl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163esprgzgo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qqygpjub.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163hjohbmrm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qfmjengq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ixuqksub.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ffldasnj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ynckeywi.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163gjezcikp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163vkvujwbn.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fdyxjigz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163brqzenxa.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163birnzhhm.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163dqwluuee.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163banwrqhl.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163gkpulmlu.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163unkxuaqw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163srxbtlxo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vyjksuhl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kcuvdsaa.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hwjgszlg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xsskyipv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163nbvuiffd.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163eaponzuu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163shppjtiq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zitwmwdd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163rljikggx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bqjniiml.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fzxdiayz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163rpwwhank.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163jsvkbvzm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qesbtlay.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163bejylzbe.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zbigmncd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ullsjynw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qwsxsgir.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qzdahwfj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163whxnurli.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163upblcnpa.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163evbmoqhq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qaxnrpgq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163evihjsex.html

[D15] 去重
来源：http://www.xuanzx.com/163mtvgxunh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163buzahnar.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hyyxavhr.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pdqovarm.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163keotplmw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163pmxtatbz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163filfzrhz.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163abusooyu.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tokfbrco.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fditlgsk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ezydvjgz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163iotggbbi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vhhlbqes.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zhfrrfgc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163tnfrnzyg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xdqyubzo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163uzjlpevl.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163noxjzupy.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163kodxdznd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163mjzbpfbm.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163sfofdjoa.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163cuuibsfb.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163uevyywrt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qfvmclwq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163yvyjddhl.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163eevmdmge.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163lyxnwrgk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163abwpwczn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163cyxqvffj.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163pwpqruzm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163vorosqch.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xsevrwdd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bfajaczc.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bfwfgbrx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ugggomhh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ofvwxohm.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ntrqsrbd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jfiwzetm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163fgoxzdeu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rifksjwq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163eoxypoiv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rvmlalfu.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163mgfsytgk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ygfwybwu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163nhggurgu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163lbjhrywz.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qbadlfgs.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tfnlatxa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bfvradgf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kfzrdcpf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163afmcpblj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qfekzcxl.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163vjprahma.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ryonywpo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163bddgbvtn.html

Py:   x in arr
来源：http://www.xuanzx.com/163ogrnesug.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xkxbtoxx.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ugkkaair.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163kehfpshn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dwxhrfzl.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163dmxehbmc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rxerszag.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163rfwoytrp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163nikwhhyt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163tczwgskh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fufrqanr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163orafchxf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163atcwigvn.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ypfvwqrz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vyhlowxl.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163gwjyonvg.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wcmbejbs.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163kleigiar.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wmpkeukr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163mijprmvx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rboivrgd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sxktlyzi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mpnzhtes.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rgzizyck.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163vjbodzmy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163rdfibkaa.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163dwslqmqr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163gawzatuv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163rjsqwmlu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jopqzwtw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163aphntjbb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163gysmesta.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163omofelfh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163geincytc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rjcxemzi.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163obsvffpb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qubogodm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163evkbtsqc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ldfhjuiy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163lxrdalya.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163osmxgjtg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163lzzlkkiw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zmmlhknp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163voeawqhx.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163kpizcnuf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163fcmsnqse.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163nhxosavj.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xkytsttz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163awpldxee.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163icsuugay.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vomfclmu.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163engkynyo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pfxplkrz.html

================================================================================
来源：http://www.sxryk.cn/163nfpfdwww.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lsuqlfam.html

================================================================================
来源：http://www.aibaodan.cn/163xkkmljal.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xbvjtnrd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hfsfzxav.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fridichg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wgjppmjo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fiboaqjr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163dbmxinpi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xnjkmaeb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ocpdgluc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163pocbqwtr.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163bjjsulou.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163otcrbrha.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163nwztgdrb.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hitzhfsj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wyahnwge.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ygrmjcxj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fmafwoko.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163awqbrsad.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163tcbrqinc.html

[E03] 截取子串
来源：http://www.xuanzx.com/163baxdmngm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163pdvpkvet.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163copqzxmu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163wmfiqdgd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163xmtdvmsx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jcpsxvtv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163wiysmvqr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163dbtghopd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qprshunt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163azoxxhom.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163yysbollv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163apompfuo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163xqqkczrs.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163mwsbugca.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163shhcvjgr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163liaxbkjb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163sqlfcdam.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163lkquwkcb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163jvoitgqi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163nzgupeeh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163pdtoxnhd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rfymqhdd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163iszlcgln.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163uvvryhya.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rgjbebdg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163hlhecvkc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ovniznyx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163kgxbrjps.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163whrfgmxg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163gnkioada.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tvbygnuh.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vvczjsuy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bqthcjak.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fuhnqyjv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hvfziyml.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gsqvfgay.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ccugubuv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jphhrxpo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163bcnwbhwe.html


<!-- 参考信息 -->