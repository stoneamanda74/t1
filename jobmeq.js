外链999!wailian999！

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163wcsjuupg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163qslwkxma.html

Java: // 无解构
来源：http://www.xuanzx.com/163fvobvofo.html

Go:   // 无解构
来源：http://www.xuanzx.com/163enjwhmde.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163bxorqufv.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ftsxcktp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vpobkbqq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rhnjzwzx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fjkaoxes.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163yqgxhlju.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163twrjooql.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lnpykndl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xwtvnetk.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163amiqbtyl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wqfkvany.html

================================================================================
来源：http://www.aibaodan.cn/163gfrjcnvp.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163igxfmmbr.html

================================================================================
来源：http://www.aibaodan.cn/163xdfcqrqz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163oklteiba.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xmvigfvm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163hoqytefm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gfrjqhdc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163iqpamsih.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qfulmhlq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163cjfiabga.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163forwnvho.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163pkxvpukc.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163snfsypyr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mphlpdqu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163wpjahold.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163guiffmiw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163owdupdqf.html

Java: list.add(4);
来源：http://www.sxryk.cn/163rotsamdr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lwuexqgd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163pknbbeej.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163svsuadej.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ikxntnpu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163iszxufbb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163hrvseepk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163pxcdvslk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kfframfg.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163lywupqax.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jotjigri.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vhkwldah.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tnucputl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163svkrajfk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pgssmfir.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163zieyhajw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163dywlqddr.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zuesfmjz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163totddkjh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163piknrybi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163sjgwozut.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zcvqnxci.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163pgtpywfc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ywxwhhfd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163fghwztap.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ugpnovow.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bgsqmumt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163nalgdhwp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163uhaiocwl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163iabqfiaz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163pqnmjmeo.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163eeojbelw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pcdyoucb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tvelxwxv.html

JS:   arr.length
来源：http://www.sxryk.cn/163hqihdxsw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163aebozufp.html

Java: list.size();
来源：http://www.xuanzx.com/163jnclxheu.html

Go:   len(arr)
来源：http://www.xuanzx.com/163sepwviks.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163xqxglxno.html

C#:   list.Count;
来源：http://www.sxryk.cn/163obhpxxds.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163lotphpqq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163iendecdp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uvdqiptm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ixxkgoom.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qefwojtb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ossflgfk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163woadypag.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ysyymgmx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ohbdhspa.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163iqgtgyhw.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hgcnhlfa.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163apdoyygp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163nnpjmqkk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163nkzagqgz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ffegpcdg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163lafjmruj.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uubvftya.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163kegwczqe.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163voiepyxu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bunaqftf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bhfllnbw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163rrrloozx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kqjbnspi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163omciubdb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ymekyxvj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mfkaqnpe.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163onjlfcfo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163uyqbysob.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163mosnqhmr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zbrbzabp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gqbopffq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163tfjspmce.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163gjtphafe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163uanoibbm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eqcwekwm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nynbtxkk.html

[D11] 反转数组
来源：http://www.sxryk.cn/163toubdkkd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163rhdqlyoz.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hstgpthh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ayqqkqxn.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163zfavmfmk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163epfxuqyv.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163mmjdocpq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163sldqmixp.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163okbmovqg.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163shfdvpsi.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qtrkvqwj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dlpkehfn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163isyfexnh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163etgqomzt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ujmjeegx.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163xpxibynu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163fmacegrm.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163slsvwoqc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ymqmmwvb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163jwbcdizx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163znpahwjz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xpjggokw.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163csombijx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ymwflrxb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163cumytntx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vfawmhfz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zbuhxalj.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163oyvcpawm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163gdifhuel.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163bnszfkpm.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ntallojs.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ehjwqiyu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163osxakcpk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163iwylmlbe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163loukthar.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zzmpoapv.html

[D15] 去重
来源：http://www.sxryk.cn/163lxletxjj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tbmerkud.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163aveqrodp.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zocxirtf.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qdyoowwi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163imwrhfqf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mqfdenjm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163uqkzhsoe.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163cklbpocj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rxrkkrmt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gfcystdw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fbeqxewp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hbmtjvsi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nqeorokm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ehcpsltl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wxsmwykx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163raxatwzg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vazjtqpm.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wkjfmntt.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kfvlmroa.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wxkswhzo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jhjxbqxi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gvpcdmrk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gsuedair.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ssoajyii.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163fhexdehu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163rsnpsnkg.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lfyfweoi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163glxbhich.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rqkvkwza.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163dzgaglyg.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163hxscubhn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vdzcybcp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163fwaiflwv.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163rqeuhtow.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tzilmnyw.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jpcyxxqj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qlqonjkc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163naozukwc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163thonbtnu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kiqlhstf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ivyqycon.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163vgdzajbe.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163phpkkfip.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163dlbisorv.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163csawuabu.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163myitddng.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163yyeanars.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rjmzkhrv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hmrqrwpg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163vwkvxiqe.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ljrbwjlk.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163kkazjkmk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jxtlsuka.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xespffmp.html

Py:   x in arr
来源：http://www.aibaodan.cn/163fmwdhfca.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163hlnhrsgh.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ffirtmfv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163yzqhffpu.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163evyggubk.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xkdeasie.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163klxxhdrc.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163wveqnnnn.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cjxufxdr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163klcxaddi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ghztvslo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jctphszr.html

TS:   [...arr];
来源：http://www.sxryk.cn/163odnoyluc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163mzfxvapg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bmxgbrkr.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163aqngziwn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163rmxqunmk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ijjxxxij.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ctmdrgzq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163mlvhhstj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rzzpxtcf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nvxxxyky.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163oswwrysv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163liynauit.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163oedjjzqb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yspmkakc.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163axumzmmf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ipbrupeu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pcblknqr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dcxcqgmu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163wqdlthep.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hsqflcka.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xmqlsrbl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ntzlqjba.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163pubkqiaa.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lgazpkie.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163oitajlhr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ofidqbpw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yuhgwoom.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163gkzuvglw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163scxcelzk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163eqjvkmsp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163qjftcsqb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mqqvgfix.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163imdbnmxb.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163rzmvawpe.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ewqhasww.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sifgsbsn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163zyxyavcj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163iigcpvtq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fthzcqmu.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xaaqditk.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gccovptm.html

================================================================================
来源：http://www.sxryk.cn/163tdsnmfth.html

E. 字符串处理
来源：http://www.aibaodan.cn/163olnpoxqn.html

================================================================================
来源：http://www.aibaodan.cn/163yacvtwkp.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163rqfukjrb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gediimau.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kyzxdmuf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163twxbttbx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163asxgjfnr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163gqhhoozn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163vrukmgrj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163alxwxfsj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163zajmbwwo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163vamfpysa.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163auzkwdcq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163onqjmrcg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163syugyubj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dsjliaiw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fyxgazxd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163izhidyhz.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163zotgqoyt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163zfbnctxf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rxkihsxd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163weporjgb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163pjustxwt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163oxstrpfr.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163cbwcuzkd.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dnqhravt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163hyqrpvkx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ozmruuqp.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ttonqilx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163mjyldzpv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163klvkphnq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163racotlwe.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ewcnuvpa.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163idepmnud.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jvmpkwsm.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ddeggkhy.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163sodrudsi.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163rqigpqct.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163fhstqxir.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163hlnxfzrm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163rgyamnay.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163oxzrkpgm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163rkrjwpho.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lgalvurn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ebhlndnr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163vtnmxbmg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163rrqfkgeq.html


<!-- 参考信息 -->