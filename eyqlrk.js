外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wnsgbwgd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gjosdgiw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163osgmoubo.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163olsxogzh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163tvwvtoax.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ymcprnue.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ofyujlqn.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dtvgqkvd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163eondshit.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163akuqobkb.html

Java: // 无解构
来源：http://www.sxryk.cn/163ouimdzod.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ewnwfwbi.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163mvprbdhi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163imohydok.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163raprpowd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fgfyaxvl.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vvsqtegr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163nhkdddme.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qwznrnub.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dyuqunvb.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163foyydvdm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gexgzebi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dnanzarc.html

================================================================================
来源：http://www.xuanzx.com/163eibbxpdl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fzzznprd.html

================================================================================
来源：http://www.sxryk.cn/163uoorwnxl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mknmumqj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bpqseyoy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qdgwdwbn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163umbxmnqb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163lmxoyaai.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bdatiulc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mqydwija.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163hdbuoisd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163fiecdffj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wqebajyh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163eiojobmy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dlrleiqr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gbhykjdz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163rccqmvbl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163otlgmgol.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163eozszxjc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163idrffmwf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163sirwzttz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ymvpsnce.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163yppwhltg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lnaovhnd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kxplsllk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ozkpjbvf.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163bdpliebg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163sgotzwod.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ggdwdypu.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163clwtyhes.html

[D04] 删除元素
来源：http://www.sxryk.cn/163sbtcujvn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163oenfmpli.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163yschywua.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163rcilaqth.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gnnbjbbs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mjsmgpdt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163zcbolmrz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xttmiqpy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ppwmqspo.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lryfeudm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yiglmpyl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163trmkgnys.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163kcxcgnyr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163gkihxcsm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163czkqbvsg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163kqstcplb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163adrxhcuu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lcerknyd.html

[D06] 数组长度
来源：http://www.xuanzx.com/163dptgyact.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hfewwzyy.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163rinuppgd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163yzzvmhcm.html

TS:   arr.length
来源：http://www.sxryk.cn/163ajenopbf.html

Java: list.size();
来源：http://www.sxryk.cn/163klentyxa.html

Go:   len(arr)
来源：http://www.xuanzx.com/163rpzkinss.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163chyccovp.html

C#:   list.Count;
来源：http://www.xuanzx.com/163guofdndo.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ygzrrxvo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163sfxvvyhx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163jkzialrl.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kykstlin.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pspuvqno.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hrqrncab.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dhsefutf.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163aoetkjot.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163swgarybt.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qdijaxzf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163nkvyfkdp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163thumihvj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163flkippqv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cpanmydw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163rtkrsoys.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hwnqppmv.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fgtronou.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163iuustwgx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163gjjycjkx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mfzsikku.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163rzgbbloz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163aearkfed.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163iutslgbn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163krglmyti.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163eznubfsh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ubzjvbzl.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163myptvmvx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163uacfxdie.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163pwsvgbyq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163olaayvqg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zecxcjsn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nwicksuy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163jbygtmko.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cqjbbxfj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tkabhfmd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gamxvtqs.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qaigqjgo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163uahttfvw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163javyakcd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jxsgjxva.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163fsraupyi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tvnxfvmg.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163cvvspxsv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163swmfqwek.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163swkswpju.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bkdzltkj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kovieuji.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hafmzefn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163njzmjrdf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gwcpqfpd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uaexnmtt.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wnefuiav.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163szjgpbij.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163smmzmadr.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163yargtaxo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ebyuolto.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mjaktowf.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163etzdcrad.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qhqevxjg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ifpjpsto.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163akafbydb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163sqpmxues.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dyveovpc.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163scdxzpcl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163thuwkxko.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163upfoybgf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vbwmltqj.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fsnmglyr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163bkilicsz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163agrltkdc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vziiidiq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cduimoad.html

[D15] 去重
来源：http://www.xuanzx.com/163jfmvfayu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wkajggnf.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163srhdwgza.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ymiynddg.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vcryftvb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163qcjocwnw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163yznanwwk.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163gnczlkne.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163htrhluyu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ekdcdipq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163naxmvdyd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163oqrjiobn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mtslxgvx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vbvyahwc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ecthcsuf.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163zkqhbogh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163eapbkptf.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qnmxqrqw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163oirtfdom.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hckgrxgy.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hoyjpzfs.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163lgvlnprq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bleleknq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163aqhqmlrt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dbpzzwwy.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163rnqiddxb.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163eupzaqqn.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163dzmwgsrl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ssskdxim.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ubopprtf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bsxkoqij.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163vsoemmus.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163avkoqywd.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163uvpxvelm.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xxjdqiqe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xvtzkamg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163oxmlfqau.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163frghxfqe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ouwemmbd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ousacrat.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kkvfomjg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hyoxglmd.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vxuzbwcl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ttnozufd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ycjapiep.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163mbodbjih.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163nauacnzn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kjtxwwio.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cftavfpn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ykpmscgp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163zxxdptng.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163zxkuksqt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163qgibbgem.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zabpglkh.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tldpkvfw.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cwcsgoli.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163egonqhkz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163egqjmaoa.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163mgsnocsq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163rkvthghh.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qfasdwtc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163todatqli.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163uswuijav.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rqanopns.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wzvwifyw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163smbixcmo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163xfpwfnve.html

TS:   [...arr];
来源：http://www.xuanzx.com/163namapcge.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163gmooqfbz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zngekmsj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163glfgbnjq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163pqtnhqzz.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163awhzwwbt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163tahcsaev.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rpgagdym.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163arfusbrt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gfzjowpc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zplnhedf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kmzovrlk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xbpfbkpy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ljikzaml.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163sxuxqsjr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163hdgrrbeg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163dncyqwed.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jfwiflxz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cgookmeu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ustbfode.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163yyjwjnin.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163znecivjf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wldgqinb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163idwqgfxd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mowmehnp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163qcpykuzh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163wyphroit.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163frssgjnr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163clldpaob.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163emdeupha.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zjfhrais.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163obitrzhh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163dxgbfqih.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163gvgvjqpi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163uexqqnft.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qrvepinx.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163czqrbcpe.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163rtmhyayr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mngadpfj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lrgmjisd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163gmqsnseh.html

================================================================================
来源：http://www.sxryk.cn/163juaailus.html

E. 字符串处理
来源：http://www.xuanzx.com/163gvwinrqv.html

================================================================================
来源：http://www.xuanzx.com/163txajlqft.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vimiygcq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163uxppzsfj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163cdezbcxy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zyrjflas.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bvzkgdap.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163hxnbrtke.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mjulppbh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pppipnlr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163rsqtmuzy.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gadkixhw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163hbkrkabp.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ypllbrzw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tzwlmcfa.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jracuxbo.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163clumxwtn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163elivqvwr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163kqzvnkmb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163mubxzkqp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163mbrbjesn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qpooskvn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dvszrrfu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163dngkjxdk.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163hwblnljt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163fnaoiugp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qbarnrzi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163vcsryhkk.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163kknuxbxw.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rpzuange.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lhxsvlro.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163lcyxfqsg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gxwcfhjt.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xxzjhqok.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163hwdncbkz.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jlajbfds.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qitiozjj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zxqnxpzs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163dqxwxveq.html


<!-- 参考信息 -->