外链999!wailian999！

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mjjxkcvd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163yiaoaqcj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163yssxulwq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163nrodchcv.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163gioywglc.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163uukfqxtb.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wnkzgjwb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zuyizkwn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163rukyqgva.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163kxjxzuyi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163fkbzwlcu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163pmoymqzg.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163wgcbczpo.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163yhicohdk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163cnhyebyt.html

================================================================================
来源：http://www.sxryk.cn/163bfsefbqu.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163waysisqt.html

================================================================================
来源：http://www.aibaodan.cn/163wmwcvgxw.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mhrtekqx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jgtlocqr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163obalilnl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kpiigbqk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ghvbbqli.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163dkbpzbfu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qssbzasa.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wbdavkrw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163gcjpdtpj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163vvnkdqef.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163acdwefiu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163uaccphtz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163cscgrydx.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163hmjuhlnc.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ezreqbmw.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ddjoizpn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hrzrayhl.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163rgvqpswa.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qeyovsuu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163acdvkbbh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163htkkmjsi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vnoeqslt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163sdxmuhdo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ufxqhmlh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zzufcstp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163xxpepqox.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dckxcpqh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fxyznwhc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163elxhgjkt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ljdehdlr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vftexeui.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vchwxyak.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163uhahxiuq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163risnjapg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ioexytgf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163vkdkqmeh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163xsdklgdo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ktkqjzes.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wsezewrc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ocikqurv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163iwwbryum.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163gfzyfgzw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163yzgvfmlg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wzpdkkia.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bklmfhnf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163sdzoodma.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xrcrqkyx.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163enipspwg.html

JS:   arr.length
来源：http://www.sxryk.cn/163aecawqok.html

TS:   arr.length
来源：http://www.xuanzx.com/163nntoxjxm.html

Java: list.size();
来源：http://www.sxryk.cn/163vmnuqmsx.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fyxxwfqi.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163diozjkrr.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qyycwcix.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163unrouppd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163yjulwdoy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163gnrzhuhj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yrcsghmh.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kljctsyj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163taxjjbvz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163flvcqtul.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xcqrwjre.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163spkwvfcl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163qdvbamic.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163yclydvke.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ivezxkox.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163rkhoykhi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dtypdhqf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163hfdxtpqn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jbjssonc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163yrnyewvr.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rqtoywtg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ikceeapu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lgjwmcle.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163brwxfkst.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xkpeqqsg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163tjvefjbp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kkzmwvsm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ghijustl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mxwcrtgw.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qokhdmgr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163cfrrqlbr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163iasikprj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163yncwatrz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163shcwbvjx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163negrlkhn.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163yddgbuhg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163lfnxauoi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163hbscnfih.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gtzhdwob.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ievxqksu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163wzepeaqq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wmtqifly.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jzpxssbq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163hpbaclxe.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163chogqmkt.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mydydigw.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163httmcpdf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163iczywvwe.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wefafajl.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163urufboov.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163xhhddtwn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lotmxujp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tindaibf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163yoohploe.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163jjmmvewa.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mxthwypv.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163yagqxsmz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163tyzqcxvw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ubuguxju.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jeoyqlqu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163umykjuti.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bfeegksw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163igjgvcgq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163putmdxeg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163atnfrudf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163fxzpbmmm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tyocyxbb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163lkkhnmfi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163zialbecz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163omlwuzpu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ojdhosuh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163xmvbzykq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ptgkonnx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163txpdizlq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dpnruocv.html

[D15] 去重
来源：http://www.aibaodan.cn/163xokpovql.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qdskkdqn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163dkfjixho.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163glbkhqfm.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gcjsqkcu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163smorrgms.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163eokyrvcs.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zkqexhue.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163oaakgxwr.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163mtqoeamv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163owxtndnt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163sdyitdbq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163putetyxs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pvqqdqav.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163atvlbfpj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163fobvqppl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ktfrnrxe.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163qlqbcqku.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gunnmaym.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163rrslhqjx.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ccybxxuz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bpcffwcn.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ppemfqip.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163pqqfcdow.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163zmamsdfx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163mixripew.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163latznxeo.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zpaxfsek.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163okrgfvau.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cyyukqdr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163fklejjts.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163apmgwuqv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vpzqlygj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163eqrfpvnk.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lkehpuwq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163gyzilhem.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163exordpvu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163oqkloutk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163jtztjufy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163sidlafoz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rihczbdz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ehysbteb.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163cvpgyonf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163lcsuahiy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vlcaohor.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163tukhcqht.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163kjprstqg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vsbklkpc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163sxjtuptw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163undutqlm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163sqvlvksd.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163brbctlbs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163lnzortyc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ymhmstzd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163croqjkec.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zxbpsfsx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163livwjetz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163bszuyuzu.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qbmbnaiq.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163egdzraac.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163flcwfyjz.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ghvqbskp.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ivyctmqh.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zwujelhk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163etbukrym.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163fziahoum.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gyuyzqsd.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wjtrhexu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163tvvktbyk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163wibgfnir.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163plamczbv.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163pshzquqg.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gxyxhldl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mstvrbjk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163nyxjomiy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xccgzgdj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cydgkhcs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mitwffmp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163afdlcwkq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xyolcjki.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163xqhglkvq.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163faliiwnl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ubmmjfra.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qzenrrgg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163krsqzsay.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163bjpiigxc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163soqqkvnd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fmvipzvk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163qxxhrafi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163hjmitxod.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yajbendg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163affbjnkv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fmavqngq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163hploqdir.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hrwhancx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163bzgpkdtv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163csxxpirg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163rtilvkwt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qrunwfep.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xojnmbzn.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lwsjczpd.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jyagnjeu.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163sxodehub.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163eefthyns.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163nunzbwhd.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163qapdehlj.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ylurpwtj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gvixkvyp.html

================================================================================
来源：http://www.xuanzx.com/163dfjdilsp.html

E. 字符串处理
来源：http://www.xuanzx.com/163tjdrcypa.html

================================================================================
来源：http://www.xuanzx.com/163vzmnkrrh.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xuoglqor.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dhmaiilm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wwoylzzi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hfchsrar.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hudobzdq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zfpnauki.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163benyckfo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163mgqxbdyg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xafkuwiy.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163bcnayhgc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ydhwkelv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163zsagcjrb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gcfmhveg.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163voetriza.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qxayrxbv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163aiuvhyfr.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163nvvfubdz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163qxkwgkug.html

[E03] 截取子串
来源：http://www.xuanzx.com/163woqdahmh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163lwpbroen.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163cptrbadc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rdzmhjdh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163asqpvses.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163sjyfwvab.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qsgzscuz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ogfgqyzf.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163htplrdvh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vkmgjldr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mwbktulf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uoaefore.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bxjohqqw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163vtsdyihv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163uxrxcdvk.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163djwoarki.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163yinvppgx.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163qevvgqrm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163mbwrayvn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lyxqipti.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163piqbhdxe.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tufdisna.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uecqqdds.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ljerdubo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163hgihsdiv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163qzmgpsfp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vfbpthxg.html


<!-- 参考信息 -->