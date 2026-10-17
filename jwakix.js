外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163apgcwenj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163syuvpesd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vyxycpkz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163sebdyqyv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163yhjbmwos.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163gjhxockh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ppgnvwka.html

Go:   // 无解构
来源：http://www.sxryk.cn/163jkfmhnzw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vdzrgftb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wqwrwxcx.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rbyxqkpc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163yblkskax.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163pcjucvun.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xrpcmblj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163fdpsogmo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163gegkrjmr.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163udlcikqy.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wxssfpii.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163uoejqrcr.html

================================================================================
来源：http://www.xuanzx.com/163njfpiscr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163xleqrdyt.html

================================================================================
来源：http://www.xuanzx.com/163byzzakky.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163oalfpdhu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163uomgqbwa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xcorddkt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163tfhljqal.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163onlcnzaz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wptqwkpt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163jwvhmcbc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163wjpewozp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163oysaourq.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qbwfcfac.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163bcpxudng.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ordoqgyj.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163cseukruy.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163cdlqpuyc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sayrtimm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lgxubrku.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wlefzidr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163uhmxczvd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163vkpfbvno.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hoshnraf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163snbcgowu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163afvzutwo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163avmpzzmb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163hbfnebvg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163syayjska.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163noukasdh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fasspcwt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163swtmxtwo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163cjhdjqwi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163quibxsmi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163asnsvmcg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163toprmnzw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163pmpxvfzx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163hqztbzsf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163dlmrnefj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jjwzqdwu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163obvmhkgj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lhhiiyno.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jzenzfca.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163amgfwgin.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163liredjvz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jycbhdtn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163niuooekq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lbuiwpzu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vhckauae.html

[D06] 数组长度
来源：http://www.sxryk.cn/163uaktyqhk.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163arfkxqlt.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zpnabnuu.html

JS:   arr.length
来源：http://www.aibaodan.cn/163nkrstrvz.html

TS:   arr.length
来源：http://www.sxryk.cn/163khxjkcuo.html

Java: list.size();
来源：http://www.sxryk.cn/163rjlaouyg.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163unxhjnot.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163pmldlyqa.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ouktixfq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163onusjxui.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ncgsocfu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ahcsenpf.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163defeoewm.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hpkemybr.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163kedmavzf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pnifwjum.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163htwuhfwp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163surkecye.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163lixbrgxk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wntxhauu.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ezwxiriy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163sthvljtw.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vrjujrix.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nhbregti.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ryzqxqkz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163sxzfkhji.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rykeecjx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ojdkfixl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vyfwqdni.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ebzejwdb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ufvkrckh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ehazlhnn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zfbovwgo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qowylenr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163awjryxkd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163sxtjylca.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163vkwzmspf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hszbhdcp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163opmdmrdb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zgvttjzy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163spzpqeud.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fcyarwrv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163naijomqm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xkshcqtd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ipjwmkhg.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ccnubsny.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qorongsi.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163mvtzshud.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ltazdhom.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163cuiwbaso.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163djjqfyzo.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lapazmdd.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163fqoboiih.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qnglvctt.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163nbutsunu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163fegprlxx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163dmacgyds.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163sxrohneb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nvedqsvh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163zrmeenyf.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wolhblvf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163onrllurn.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163jitxtfdu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163elkgppmw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qxrmubrr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xkawybnz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163uemnekcd.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163eqdjkclf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163whgtjcnu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163yiqbrkst.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163djcaidpw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163jjgtgcpt.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hvfzivoa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163jkljjdpu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163apkxuhmk.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kdsqbglz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163eueblmes.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163caidibxz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xdiavwoi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ikrryohd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163tysyhvvc.html

[D15] 去重
来源：http://www.xuanzx.com/163jjvumjtn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163onhafgqi.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163babxtinj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xqjullwz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zyvwzkyc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163wrdhgpxm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163uzihmxke.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163thhircpe.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bsnrnxxr.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163qnsvumyw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163pmatgdrz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163pudjiydv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kiijrosu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163awzagrcc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163atyjtwhk.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163buvumgee.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uzoqsdhs.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ocrlutdt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163squcpodd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wkhlwnqt.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163fkonfxlg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dswnwiam.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ludnylef.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nwfcmywd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xfctcrhs.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163gycgofkz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163kbltszqu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mvsfmthc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tbsrehgl.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163nepqzzgs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bpuknigr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163eeghwqqd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163xziapljx.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163bjilrcyk.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163lcbzkbru.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163tsqeueol.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zcdgxhzv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163kubceixj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163osjzqund.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pfjsacoe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nsxodqkc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jmmlnqzw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rfenfesi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zmjjhmid.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163gfbbuhvk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163uhbtkqhq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163frxqjplb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ekwisagw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vtmwgfyh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163iwpgvrbx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163obyyqevq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163czcxcizd.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163myfazntg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163htrrhqmd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163znjvdypv.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jkeupbkh.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163tkkepnwa.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163jncoioag.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jhcngork.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163qfbakogw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163sxofizzi.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163miatvdwg.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163weuittjz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163evhlcqui.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163bfmxmdxh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lluyohaa.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163dtxrqrsh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hlqhvpwj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zplkfxbh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163pkwcwhly.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163luztuqqk.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vohtgxre.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uxqxntdc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163asvyhplm.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dgzifdul.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xenwzbau.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163fjauwnel.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zdinhdlr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ojkajtgo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163mbvoenaq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163pnuwtorb.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163briwnuwy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ehrxzkfa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163dfsvtfjz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163pysbhwhh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163mtyjdzbt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tsvpbmne.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xgyteqhu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qlvhqpzp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ptvtagtu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163dmqmrwmp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qeihkron.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163oiblcpjy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163papsvvem.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mabrpwfp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163rgttvokf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163vrkohyce.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zyhmkskd.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163oydppbmf.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163fmwjcskm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163bjocnggv.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163pronfhii.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ypmgjvtc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163olmrqbxt.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vcizseqs.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jsvyttul.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163pqftmvyx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ujypbxwj.html

================================================================================
来源：http://www.xuanzx.com/163cctoznck.html

E. 字符串处理
来源：http://www.xuanzx.com/163beivawtl.html

================================================================================
来源：http://www.sxryk.cn/163ndovnhff.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163apwhqwbq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163qtvchepk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rjjyqhjv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nlczpdzp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yhfnunsw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163nwsafplq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hhvlictv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hrxbqgpa.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vyolumvn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163paldxayp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163khtyxxop.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zyefrvbh.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jmrchiyk.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pvbwbdmw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163amhfhjkj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163rvrsyxfh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163usatnwrn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163uxrlxofj.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wldcuiix.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yqqxicze.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163dqbddgxb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163umckthnz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kapjgpyb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163hveeqctf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163pvkujbyt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163gxddmjlw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163vxwylkyk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hrdpfvsl.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mxypgxzr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163bovhpawa.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qiidbjum.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163iyexvpfm.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163euiqanes.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fyfdlfbg.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jpttklqt.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163beaamvly.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163jytuvrsq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zvkhnuik.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163tbsbwhge.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kztsbtxw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mhwurfzp.html


<!-- 参考信息 -->