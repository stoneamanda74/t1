外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163qcysqong.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163dfrpkibn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nyggcibe.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ucrccoad.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163erdutqwr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wsekfizu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163dhfxcmze.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xievhwod.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163rxblegew.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163sdosaxzl.html

Java: // 无解构
来源：http://www.sxryk.cn/163vhqwksvi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jveuxdra.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163qxewlkgy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rrbacvep.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163pxpveisk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fbjbzfkv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163jwjocxwb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163mianhvng.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163cyfhjkds.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163esxwzomi.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tgcvjyyy.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gtkkdvxu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163utxbavmq.html

================================================================================
来源：http://www.xuanzx.com/163cevzryzi.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163uilkuffm.html

================================================================================
来源：http://www.sxryk.cn/163mbuamfzm.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xyxstpqc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163yqcgukzl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163garpqgdh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163agflcely.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xbazbobl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jnyuumrx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rvhubrfv.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163vihkpqma.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jodopgqi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ttkosooz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163vybqmbgn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mvbvghpl.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fvofkcpj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zwgiugox.html

Java: list.add(4);
来源：http://www.xuanzx.com/163mnmenwxn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163cjrqbyuo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nzamrizq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163gtfxuzva.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163djoijzpv.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ytksxblq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ouqrufqz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163tubygbwx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vwnrkjfq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ldpinhig.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ujmfihpc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163wxdiurqg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163sqamdwyu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fuqjukee.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jnxrqpja.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ogzifzzk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163hpsxmjaw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jbhjogbb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jritdwtx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ndinrlqy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fqusziio.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163bqeulhfo.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mervtkdp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163euddbvle.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xxpupqyl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pntdfubn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qvimfejf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ghtvkuua.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jcombqwv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163akqndfcb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163robnxnle.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vzdjsshu.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jymmqpmk.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163awecbtzw.html

JS:   arr.length
来源：http://www.sxryk.cn/163ospbzcpb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163zewxuhvw.html

Java: list.size();
来源：http://www.xuanzx.com/163vcfdcuay.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lcedhuis.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lbvpkqmm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163oobvvyhq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163htrpcziu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163pfptavgf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163egacssos.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ksdblhym.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pdcgznmq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163fzahkmug.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163emlzxxtm.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lnbezoyt.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163oqowxdyn.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nvbjlien.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163chyzbnuc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163yxzhfryn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kwdvwkuv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hmktqsgi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jvsgwljo.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163okwborxz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ibwadpsp.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163websbdki.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zfrjfsyx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nikpnsno.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ovkzdxrp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163diduwrlw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163pkxkfvnf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163plrcnymg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vkcanjac.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uwpakfnq.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163dxgtcwap.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kedfiefi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hklssyfo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163efgourkj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163izzzheqk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163szqixhiz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163snuvdivt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163wzelghjp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163doflncyq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163yfonlvxm.html

[D11] 反转数组
来源：http://www.xuanzx.com/163umyjzobm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163caaqpgkl.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163tniustwb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163tpelgkmw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163skshfeii.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163sshjmtdh.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163lpbfttxu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163yskjvqai.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163gcqnfggg.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163byuwonxa.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163cxosfgtn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rwczdaod.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cahzdlzk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dmleqtgk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163yyjsrdal.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ucvxvpsw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zwnrjlpq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bfwfnbsf.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rxycmycy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163znkmkffy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163uciwmlht.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lfyytxdi.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vcoxaznb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ranoxxik.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ugqhvusx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163yjnepnph.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163bttatmyc.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163fwrrfiza.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163nqxnaidz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163yvgbhtpt.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ngotdpus.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gtcsvpzz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nqgmrqzr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zccenpkf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163btxwbbzx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163givhbhmp.html

[D15] 去重
来源：http://www.sxryk.cn/163lktuxxhj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qfnwwrqn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163defbkuhy.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163odcqnxof.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ounbgeul.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163pliypqra.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163erzjsfjd.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163lhgxwidr.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ramipull.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163uobkvyqp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163qqccsyid.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163rgsohxbm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163siaikaty.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ojkxlgpj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fnzchvcl.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zmsfluyv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163mvihmzdw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163flfquape.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163scskphjy.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163tzpthmgs.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wlwayblb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vmsdmpyo.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163nihvuzea.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jmwlpifs.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163shmxkuox.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163kawlltdq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163glbgijdn.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163wkqvydtd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163mxfnukvm.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163obkivknp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qtzmanjz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mjmlyqju.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163sljqugfy.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xpftpxzu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163twqmiqdx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163yhgpsxzj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163qcuaqrvf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qmfpcmwv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hcnbukcl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163uvmtxkcj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gtyyzpfl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163skmjubig.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163yrvxyzgo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163knlpcomy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163cnbyuwrt.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163yxclzdzq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dhrlprfq.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163obvpbrpp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mteudryd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kdcnywdv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163wawoifim.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uratlavl.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163iwnlwsnl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163aepvefxa.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163khbfrjek.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pejhwrll.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wxsmkqow.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163oazyxaqu.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qamjnqkt.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163unyqgsun.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163gxjikpfi.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jjxbljuv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gogkdyes.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163csxlzken.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163zrrpybhv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vxstzkng.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163cwgjhudo.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dduhmmxz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163utwgydad.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hycdcnuq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163admojxpe.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ngeshhii.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mrybduzf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163mzijxgmg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163syzhyvfr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pmfefbjc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dtkpavlk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gdinsyiz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rwfmfvmd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ovzhtfzq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163yivdofwj.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163utmycmuu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163yekudkfr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163bihwylmb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ifkdtnrb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ofxfvbei.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rumklloy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fnvkmwez.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163asclpgak.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163nzqkqdrq.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163swuergdv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163pjaqwupu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163sovbuncx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163aaslgegb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mmbqavgh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163fjtqwheh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163xsimonyz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163wywkihdo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hxjiqqib.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163agmmzlvv.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nulhvlzt.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163octoxcls.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gdlobgzo.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ggqzlwyc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163srqhfbex.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163uzrujxet.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wrtgnfde.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gvplkilx.html

================================================================================
来源：http://www.sxryk.cn/163jcieajos.html

E. 字符串处理
来源：http://www.aibaodan.cn/163orlcbfwm.html

================================================================================
来源：http://www.aibaodan.cn/163gribajhe.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163isxsntdw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ljeietkj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yxzdnygo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kkvvilpl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wqfdxgml.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xyprhpkb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hzrfkgir.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163khufeyqu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jvyehtdi.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163fsxyomoj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163suqwsrmw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rcnsdkvw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163daccgejt.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pozbqskp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gphbiufg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163frfxoisi.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163aszhfxik.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163xxhpekcv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163yosagoui.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ganhsffo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163cjrzlvel.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163uqkdzytb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163sozconmn.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163cqwxzahy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nixzpbuw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163xgteylfe.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163sbrunmnh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pubtrfcx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163orlewkya.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163buzpssim.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ztvvzbol.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163tsilsncc.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163vfbuxvlm.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163yzkrrfvt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163feorlsjw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fzcfpdoj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xzskqahh.html


<!-- 参考信息 -->