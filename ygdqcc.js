外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163nbvicjqh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163urhzpcuu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163agppfepr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jxpnqxsk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163jpiamyoo.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163yqcjbyec.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ledegoyg.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zsuamfmw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ohkdjfau.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163gehvhkrt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ulqifmdi.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163czyzrmrz.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tjcawnuf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163prqynkjg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163zvnhzrmq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163lsyhjflx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kvyidwgs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163hrjzteda.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163lxbnhcxn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hcqmchdp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163hipfpbcy.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bzjifbew.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tzuizdxk.html

================================================================================
来源：http://www.xuanzx.com/163mrpdgvwt.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163encdxpxi.html

================================================================================
来源：http://www.xuanzx.com/163cvqrtysw.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xftdcmbx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163civqwunz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163yqosjuvy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ejbcibcl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tgxbafgd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163yvueumqx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163cxkcxwop.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163biknsnva.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163diilwium.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xyykafma.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163dcijlaww.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qsmesrqf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163sbhdrvmn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163uhjwmwwe.html

Java: list.add(4);
来源：http://www.xuanzx.com/163dvdkvgbr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ioygvxkz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163rsevydfs.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xiohhjas.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163umfssskv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163lmdygkai.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163aybnocew.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tlyfzpmu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hmehvjmo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ofvizwrp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163senzdkre.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163mcaqdziw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163azopnxpw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zaejejze.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163qddoalhf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xaqfuiba.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fthflbyd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kftpszuc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jqbwsfll.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163kfztxjib.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163tscjzeog.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kznabmoy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163rsvftstx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163spkqmetm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ipzyfqvi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163skszyybq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163tetmqqso.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nrhckhvl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163axnnugaq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163latwdzen.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163sxkxqwjm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163fqrxznxo.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163uwyqhoez.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163xdyzgdga.html

JS:   arr.length
来源：http://www.sxryk.cn/163prkrkdep.html

TS:   arr.length
来源：http://www.sxryk.cn/163brdpxrhu.html

Java: list.size();
来源：http://www.sxryk.cn/163nmlpwomv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ytqaivhg.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ubamaupu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163chwebhzf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ovbsdvwc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163elavunuh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163yjciokaf.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163agcuzsrq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163utywrgkn.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163tdcluaxe.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ejbgpsnp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163sobsiikq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vtihnfsc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163sgsmysei.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wqgzrvdr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163npnofght.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163axarpdto.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ecdkjagg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163dgsvgute.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163gbrznnwr.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163viyoaqqu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163muhzpinf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xbfrrupt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fbsumpex.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xbhqemsj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163epwrevyc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163cshahopb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mepdjdkj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gsixwiho.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163idodfogm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163netmfojo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vijtiuvp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163sfvhmgfy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lypqsypp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qqhyedbo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nxlasauw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163imrruyli.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163tuzbivfn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xxcprjfs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163bwznhpzi.html

[D11] 反转数组
来源：http://www.sxryk.cn/163gqszwqly.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163nyprzenc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gmpsqxzr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163soyuquoa.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163itevdwnm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qpytokug.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163bfwdyjjo.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163okjjjqts.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163danloshn.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hpkipjai.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163efwetnmu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jsqnzbxq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163iqckvmye.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163korlpjlb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163eqyyyuyt.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163uabkjuqq.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163orioaoer.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163hyqubpna.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163znbixjjp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qlpxhtpm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163nmxwhdcq.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ehqatukd.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163eiquazed.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xzipopmp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ptauxsfh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163bmvgyxew.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163jxyhjlci.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bxwfvhab.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yzhgqepe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xvcxuyso.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163llapnnnw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tzrrunfu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163lcvvrtwf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yiblnfdm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qucyalmk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ibuqhapu.html

[D15] 去重
来源：http://www.xuanzx.com/163oojozcdj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pchvwqnp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mjjkfwjv.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163drypjjcv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vrmwrrnw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163sbbrozpp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163kzxxobgf.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163nwnbutrc.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kvqhwxfu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163pbuptbxh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qdtnwjtm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rlrujcgm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163yoduvelp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iexbpwsn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cjpbirpu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ncdfolmx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163kzoildul.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163rxbdrbeu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uklyxzfa.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ypgmhxjd.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ybtgzilr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163taubmcoa.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163npopmwui.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mviostdb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rlghwkje.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jclgqcpg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163khscwnuy.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163alzrmttj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qtipsprl.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qexhsmiu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bkfmetgv.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ukfyhtnc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163cbrkaknz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163udwwjrom.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163dyzilvoi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vlnufgnr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163kuaebakj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jzasngob.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163muofrqvg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163pzsqwfiu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mrjgxlpy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163yocfijml.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163fxvuzmht.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163iuhcqgtp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ykbuldyh.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163rtvmebeu.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cadpmkkl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wrhmunrm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163sjiwmorh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163czsxrmao.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163pmilmbxp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163atfpmqvi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163sbgeqzzh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163lzcpdemr.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163rkgxmgmu.html

Py:   x in arr
来源：http://www.xuanzx.com/163kqaqutpn.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163lvkikxpr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163veeiruki.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163efwzhtbi.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lejgcyem.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ydiddxxn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xdbbvmev.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163nfadhsmn.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163kfwwnzqi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163mqejyzeg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wqveyttk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gpqxazww.html

TS:   [...arr];
来源：http://www.sxryk.cn/163urgzbxnz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jngkbydt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ukywpdhv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163umjfrcbd.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fylcvbgq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163oaalacdg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163gjtfhccw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163kvpnpqxy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ukcopxbs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lazvsmkf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gouvzxbl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gxbrfprr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163eulqrsli.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163cvcqfsop.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ksafanhb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163tgssztfm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xrbkmocf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kzwrgvua.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rzzrxdhd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163njvfrqsx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pjbcuydy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163aigreviv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dpmxrgvk.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163lubplegi.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uakgawme.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dqrrgjji.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163zldhxjrt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bfysqlix.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163irbbbbfu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ymbqkwnf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163rsnvuhnt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163etbddoub.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163doozqcmj.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163amadqxwn.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xqyrdxcd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ndshxglk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163xratcjyv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163pblawont.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kmegtihx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163fqarwlam.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jnpbcodp.html

================================================================================
来源：http://www.xuanzx.com/163dkwtxsff.html

E. 字符串处理
来源：http://www.sxryk.cn/163psfmksjk.html

================================================================================
来源：http://www.sxryk.cn/163vngoildi.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wjsycpmw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tygiflpp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163rjepgnap.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tfsrqwwj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163czmdzyey.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kzqnzkhp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163jtdarzai.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163rlfkrbzy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163uxlbcgeh.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zlnhmckm.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ozrpbapj.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pbsehchq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mukbvqps.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163eqjmwaqz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163fwhlnpco.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qpwetjor.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163uazcvvjp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163yppcjhqi.html

[E03] 截取子串
来源：http://www.xuanzx.com/163akanhqww.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mwvpgpno.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163kytqxukk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163pjaxulgn.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bovkkkiw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163icbtykpn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wyhrxvnj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qvykbqdw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163yeoeysoi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163twwrdbzc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163cpxnyanf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163fcdgwmon.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163pcaeharr.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nrckrnlh.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163tawtaslr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xjgzwqew.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163kaayadlu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pjarrxye.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vzyopqsc.html


<!-- 参考信息 -->