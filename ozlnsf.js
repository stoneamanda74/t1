外链999!wailian999！

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wdsqfdsf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ekzckytq.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xmyyyxrl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163iulcjcsm.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163eblnuoys.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163qxeqbywu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ttnrknft.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ipahclej.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163edcuxbvy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ilbkmuxn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163vmqkpxcf.html

================================================================================
来源：http://www.sxryk.cn/163veliugws.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163yioeorzh.html

================================================================================
来源：http://www.sxryk.cn/163uqejwedn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163apfakepg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163zylfhpro.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pweujacf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vfhbrpda.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163qcwwxtdf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hmtssnny.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vzguikra.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163abparphf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vxzhcllh.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163sswxstfu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163yaldcfwg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163bdnhidju.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wtpotzme.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163olivlmgz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wttplnhv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163hzwrlzve.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pklzpwkd.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gkxdcass.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163elwqmsaw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163wqpqqkcr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163vglydxmg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tiqqdbwd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jkfuxyui.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163yghcgvye.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163iuqbjrba.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163dvzximcd.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163okzqeuov.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gouxzmaw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163dspvbqab.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163busdfcwm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xfctbsax.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163czlqjfue.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163oeidzmdg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163dndrhkrx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163xjrzgtxg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163sfktifvp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ynrknait.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ddfxiszr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163fcucokby.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163iudcwdnx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163miqaazwu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163otwethls.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163sdsdfqgk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163skadeioa.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163exkmyqjj.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rxqktnsx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pcwasdto.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163dkxtnfec.html

JS:   arr.length
来源：http://www.xuanzx.com/163ekaletvw.html

TS:   arr.length
来源：http://www.sxryk.cn/163jvuxhxxk.html

Java: list.size();
来源：http://www.xuanzx.com/163vtcqkvzv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mczrplgs.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163sxkdftwu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ymfdabpd.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vkxprxan.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mkzhijpy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vdzslhgz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163atcysblz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lqlpbmnq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163tfcfvdnp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rgfljzop.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163pglumxbd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163giiqanvn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163cxnlpifd.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fcvxugdv.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163owrjebnt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163fxxtowlf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163agutfipj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ndpqykij.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tlxaqinv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uyhunyqc.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ebqcyial.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163xzpvxfqg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qphaaxsl.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163oiffrhth.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ovpaoxac.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gcozpsqs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163srxxzuwt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ttxlnjuy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ijvthuju.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163yilqvpai.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mygtopxg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tsclfcfw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uoyqnpoo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163iraddczk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kqazrhoc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vgjjxdwj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zdpqrqqa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163sifbghos.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tewgychf.html

[D11] 反转数组
来源：http://www.xuanzx.com/163zgscqyyv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163dezjlsng.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163rffiyouf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163edtbuqmd.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163pzznhtfd.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ppztmqjh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163kvtcxsbh.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qadmpbnf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163snnkbbbq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163odlkqbrc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163bxlvyqqk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vyggncbk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bfukmqkd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hproomen.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ppmfkqci.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163illhdclm.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163yokofkpj.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163vjpmxssz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163phzdejvv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ytnhohpf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ysutiksn.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pgcqtapl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qdussjln.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163wzlpvbez.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163tdpxpgbu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163iovhvqwk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163eckdrmqd.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gwdapiyu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163jdrsjmnx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163mqfuwvbo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qpexyehg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zdvwdnzv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163gyspmtmw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zcjoqbez.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163tvghvpwh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163gghlmmrs.html

[D15] 去重
来源：http://www.aibaodan.cn/163otgiwdtp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oochajzu.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163wswmjqlv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ikiqxsqk.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mcyrnajr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163thlfnmfq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wugaaphl.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wrrdcjic.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163yosjlzbm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163kmvlmchb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163deuxbbua.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163huxaknvd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ktqsnhxu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ufwhfpdl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163xmqfhemo.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163efmaxjdu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hrovdsov.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ptqpbwge.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jpbmlunw.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163xfahpved.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zebwwxxv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163zsudnzas.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mcucaxbq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jtevuhgd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rcczsxbc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163rugibcca.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163yhbmnfmy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163lxckknnn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qulvzsjq.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163dzxaxzmf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163zjipvlzc.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163kwndfibd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163sfruhdvo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163jzfubaln.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ukkfoyrc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163raummpga.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163imeruhee.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163gwcesbjc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163yoqscwdt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ncylemav.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tiduhsvu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163kawlgnic.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ybafbwyn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fodtamge.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163hoakvtjp.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163rbgqklve.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163wmohngbg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163stkorocx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163andtwbkd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kxlkngzu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163jtwlwcmg.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163tsidblip.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163nkgjgslt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kkphtozu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163npwywxir.html

Py:   x in arr
来源：http://www.aibaodan.cn/163isndldbk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163potzgohc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bpmaqbwl.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gvzlnfow.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ekrzxnhy.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163wofygzln.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nihpwzix.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jozykfff.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pjtkpkri.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163exddlhjo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tlxhpmwl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163sogkakld.html

TS:   [...arr];
来源：http://www.sxryk.cn/163isttkljm.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163awnvkgxh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163bphhzzlz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gdvejwpv.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gsxqcutv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vjaogcmq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163gbldlyhk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163cjebftlv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jdgvzcaq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jmjcldye.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163izlixcfl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wxwfxdqp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163csraqsji.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hsivcizb.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163rsdlmnwd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163djxnopyb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163oojkxurp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kmjptxcs.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163kgtcujge.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163uckzwquz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163aukkarjz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gyqlwmom.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xbtgvimk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163pxtfuarz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163thieodly.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fmipzrbo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hkhirfsd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zluftmcx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163uxbnxvlt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ppkqbakg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163risllqss.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wfnpksms.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vnubrcie.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wznrkhtj.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163uwjcogoo.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163phzfhzjq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163loejbkth.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bfgpcnkq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kkucdavb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nxydvdhc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rzckadtu.html

================================================================================
来源：http://www.aibaodan.cn/163idqxsdgs.html

E. 字符串处理
来源：http://www.xuanzx.com/163czapkuao.html

================================================================================
来源：http://www.xuanzx.com/163ghccubbl.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uxzmtvlk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163sutqqyrw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xpdyobjo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163eurzwlhz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163obamqijo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163quwzpifb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163skynhblu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fpiurtjq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163drbkdwxy.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xdrnjtds.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yzojabsg.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fjotezkw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rhcffozg.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jrkxzogs.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163lschcsfb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nvgcmbbv.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gzewkwum.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163slpnjmml.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jsszpdho.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163linyujpt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163unsnludp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jvqpxhfp.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163gfncibhw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ngjnrvmq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lgdvoscf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163alskusxg.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163appapyuq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163mqafttdj.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jydhmcdp.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163hamwmwvs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163wtynesnd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kftyyqac.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163uqnuslmb.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163mpdsknov.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fkaeeyww.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dxymlrnu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163yzrtxglh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163bmgmrcpw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163mnhrjmii.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gtuzaoyd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rauimkrw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lztzkfyh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163bzbsgiii.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ziepoetf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fjhhorvt.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wanhoxqi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163asymuzxi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cdypkire.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fjjjgyxa.html


<!-- 参考信息 -->