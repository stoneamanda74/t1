外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163luzceadb.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163uelimeja.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ceuimvjq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kjvyjjto.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ozucegeu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163cctaksmr.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xsstrtqt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163afezeunx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163flqypwfd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ushthyje.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163dqsqaict.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jkppoiri.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163rtipejye.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jbqrlpul.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wjhxgzfz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zscrjntw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163htpojnms.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dilqbonf.html

Java: // 无解构
来源：http://www.xuanzx.com/163feccebct.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cywqinpd.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zelmlwzt.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wliyioie.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fkdlcygz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163weiyvqpa.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qxjwtuyk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163fesjwusr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tlosvotd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ionovfgw.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163cpoisuja.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ebuynxay.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tbmhoskf.html

================================================================================
来源：http://www.xuanzx.com/163kfrmssqk.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163nbuksdjx.html

================================================================================
来源：http://www.sxryk.cn/163oapwqika.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kqetmyva.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ovtimfro.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163gqgsngho.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xfiicbwq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163srnjxfis.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163cyostige.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rlmebbcp.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ofrwbnck.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163gawhgkjg.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mmdeddcs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163aqsljngr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163yzeiimxo.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163dsmfudak.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pldanfyi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163nfdmemsr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163dozahblb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163jwarkjul.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163jebtjwgd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163zcaamgbm.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163zaoykums.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qhdcpmdu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163neivhvxv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rqielbns.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qllcqjtm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hzebgycw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163bmcbchtt.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163iidgxfds.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lkgrrvgp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163cpxtbdow.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163sqjglowv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vvxdtphn.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dtgtkwmb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hounvrqb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163kajwtkjp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ssaplahd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jfymwial.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163jmvrryll.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163biqmrfee.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163narzxryb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163meidlssr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163safuoqnf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163uirqtyys.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mguybugg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163aopwqivb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163gkagixvy.html

[D06] 数组长度
来源：http://www.xuanzx.com/163pxcngxpe.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mhnghqeb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163wvzpdams.html

JS:   arr.length
来源：http://www.xuanzx.com/163fghjbtvf.html

TS:   arr.length
来源：http://www.sxryk.cn/163xqfuuhfb.html

Java: list.size();
来源：http://www.aibaodan.cn/163nocuswti.html

Go:   len(arr)
来源：http://www.xuanzx.com/163sdbxsfnu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163jzpntqeq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163tuiqsubm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jilqnbza.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163cdtopwti.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163dqideqxs.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163phdagohb.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bihhfcwa.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163bfqsvsms.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dwbgbbpp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163npqbmhgo.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qbxuxrel.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ozokslww.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wtefgrdg.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163macrtrbw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163otmnmxgp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163eybsocdy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163jpucuvgv.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ztefoago.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163apxqspvw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163eelwqltn.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163lorkaqlg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kmyqnvqq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163xhhfigjc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163enhvmbao.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ivjpyuof.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163zyhczdlx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163srkigswa.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163npjtmzyj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163tnwkzgmk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qctcfyxl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rekxtnuy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pjvcxqrv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mqbqrzoj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nanthtfp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163fpwafoqh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163fvwojczn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mmhzszvp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163dclwszjy.html

[D11] 反转数组
来源：http://www.sxryk.cn/163tztymvss.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163bdllbpge.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163lbwpwsxt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163sexvfchc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qxolkijn.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163gczvuzml.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qkbjxwzn.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163tsawpjza.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163aqkdlpyl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bsffjgom.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163carmtenq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163xeazsfjy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ytqikjeh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mzlulxpq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163oghkvplk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163dumpgdau.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fusggmdc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vwwdhnfy.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163hmrytqpn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163reimzbdc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kokvlhlt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kzeqestu.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163grybemmq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163tayggyao.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163izjbtrpl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pmdphzkz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163uljidyxf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qqtfucad.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163yilvtlrc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163urejorga.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cytrionr.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mcdnhlhu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ogcbwooi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163luftsfzx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163pedtqleu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xnsmetes.html

[D15] 去重
来源：http://www.aibaodan.cn/163cdyhrcaw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pwyhhmtk.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ksjmgsum.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jdwummni.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ijnkwhdh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163wgntmpiz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163jvsjngem.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163guiwujai.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mfmgjkqd.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jaslhdws.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ukpvfjhp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163cakunjca.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lgunxiyn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vjlgkmim.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ypjkhqru.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163bpafqabi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163hzstjwhm.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163blntubjg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163klqdwsdk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163smmwghmw.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163cmqsqidh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wvnmnkyq.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163inhsdlhh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jdoiallf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163lxjqofsh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163tlclcqmo.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kncjbanl.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dhsbahra.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ohyykkcm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163fkzdxizk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ezqftdyp.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ufajxamo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163mwkruiwk.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163fgvdousn.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163yaasvdct.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wwdgdjkb.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zfbwelao.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nbigcxhh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163qzxfvzyr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fydbothy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163spefaaou.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163bvdudioj.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163lygaxyrj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163dsxkbdzn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163smpyszji.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ntbisjez.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yupuhfku.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163zhpbzddi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163thfdwebg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rullguqu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163lyhxwyht.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163exhsarkq.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163yiyugmry.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163srsgldvp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163tbihsnbk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163fyavpgbl.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zjppwjhs.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163vvpepsbq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163fcbmlaym.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163strqacyq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163gtweaezk.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pjxyjyhj.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163rnzwpezm.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163izjymobu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163egoepftc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163okplohvz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163wdxgexug.html

TS:   [...arr];
来源：http://www.xuanzx.com/163iclrnole.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163pikcfvkc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163nnikrcia.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xonlipdb.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163dcecxmru.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163pwjgeegg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pacnxbel.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rfmgrkux.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uakzdrfs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gysxaqod.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xuyujhzm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lxwfwhjz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163gpthivlc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163gvlcjcmw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163robjcahm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ucamakyq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163buidwpzp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jeusxzwc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tlxniooh.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163tlgxawnd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xvzqbqjr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zvxqlhky.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163sjlgumxx.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jcidmfbp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163nqgiiade.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fcznlgct.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163zfwzvcjm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163cqbtcmcc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163whlkbldl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163hbmdigkt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163tfmkuahg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163jdnhpvfa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163psenkjhq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163awlbmtch.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163akgwglyc.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163celqrnrr.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163eyzvvwzj.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163tqxjdcmw.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fbrprveu.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163snycpxzm.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qmhtrohe.html

================================================================================
来源：http://www.aibaodan.cn/163ozsueplw.html

E. 字符串处理
来源：http://www.aibaodan.cn/163mmpsrmah.html

================================================================================
来源：http://www.aibaodan.cn/163dwygccwj.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ojqnkjvv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kwzxcwjq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163orvmsyvw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ygbsrfnc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163simmzurv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163nicyghrr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163dkfbehpp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163yycourqk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qshovzkf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163mnyaxpnx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163fuucctsb.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qgnulaww.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163eldweynp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cgynwlpv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163pisvfttc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163uvkrivgi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163vxbvjkqm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163zgjgdgiy.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jzqkcldy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163amqvfpbj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163tslgooti.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163crrmymkv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163lsdrqume.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163teotbzpj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163agonljoc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163rfzgwwkp.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163uuvimkqm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163unhrrvny.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163sahsrloc.html


<!-- 参考信息 -->