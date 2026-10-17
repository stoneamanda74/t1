外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163sptjpsns.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rxrkauin.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163hoygiulj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wuuzrloj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nhceyhvn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pjvtknyg.html

Java: // 无解构
来源：http://www.sxryk.cn/163qryemftp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163lpdgzymi.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tjrdetuv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163refjserr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163cneysqmk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163dxqnwbzh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wniqjstc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jyfycsgh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gowupaqf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tlxgdsly.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dfgwhsay.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163morkgruj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bqwftaoq.html

================================================================================
来源：http://www.xuanzx.com/163driwayhl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163alcmmqbw.html

================================================================================
来源：http://www.sxryk.cn/163qrepuswj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fpnebwih.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ganmraqi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163wmbkmnzp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163orygnqnz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jhlbmpnh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ojzhaztz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wecleoun.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163pispsidy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mlhqjmzj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163doomxcxe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163qvgvitqv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163sojfvlys.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163iwwdcwff.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163lbxxbcjj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163cayybmbi.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163naxcskin.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163zzqqkekm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zxfhdgkf.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163julotqiy.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qwielxde.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163bnyvsvtd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163earyitgm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zzsfyaxv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ijsusskp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163uymllhba.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163veazsnre.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yrilaorb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pfwtmnbv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163whmmgbym.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gboyimem.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dckfknxr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gplwjljx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163zdcoafnn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163tzxqtjjl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nmsxpqay.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ppthrrnm.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163qskvqsut.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pmdcrldf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163pkxpungs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bqqhqvit.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163kivfzssy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163bncneane.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163fhskcfho.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jarfstob.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xqexvuzu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gvhwjlds.html

Py:   len(arr)
来源：http://www.sxryk.cn/163lcdyyhum.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163azfmzbex.html

JS:   arr.length
来源：http://www.sxryk.cn/163ofbumnpv.html

TS:   arr.length
来源：http://www.sxryk.cn/163dudvpukd.html

Java: list.size();
来源：http://www.sxryk.cn/163zunxecht.html

Go:   len(arr)
来源：http://www.sxryk.cn/163etcxrfwc.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163clboteua.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mubfhkug.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wkagehic.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163znothyka.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lxhlxcey.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qsvuzaaj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ecdsvghp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163bqhlhjrl.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163caoqljih.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qhlykbrp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fslkgkli.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163dkoglidu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qmnzyjsn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163uwkrdxvw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fxozvnyp.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163duvcblef.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163gdjfkeuq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163kvxoarqd.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163osijqvte.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dkpxjcqb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163dakolbsl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qzmtupxc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163voeivarr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vxfxbexq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163cdutbptj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163cohduyfq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163pteqdtns.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yrvbcqzq.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163rfpiutfb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163puvogrfg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ncylbdvk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rbmvrvko.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163obeiuqcg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fxszgdrc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163gdzagztu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ncmiabrs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ymwfomnc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163iosivjgw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pauncjff.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163iqltlbis.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163weulilqz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pfontgqe.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lxgisevp.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163etmdekyb.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163jqmwtrhv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gdvyzcfu.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163znqrqlog.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163csnxxwzv.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dothiqwq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163mevlbowx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163khjrctkq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ztfphmuk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ligyfgff.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163nszzkqxn.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cjnfulol.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jeymoxtm.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163btxwxznq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163asnwizap.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163weyennev.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163neclwnvv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ymbfqzfg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163megtbxeq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163afymubom.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ghhrknqq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163eyzlrpdv.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ogikmobe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ndiipfez.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163cynnwuzx.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ajdryygr.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nlxreafm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ntrdamee.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fnufjlcn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rarqhndm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dcmvlojg.html

[D15] 去重
来源：http://www.xuanzx.com/163sasmlmzx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163kzmpfivp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163kdzxvmnk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xkjbvjbd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zxkueuvr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nbmpavia.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163kyudfvuq.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163kniidfrn.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163aqrhxadj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163vgmwhzyl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ubfyosph.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163euygvlao.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163trevzhoq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cdjdtumz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163mwmmlfno.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163geacjhfi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163bsdghony.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163pmxuwxuy.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ofjcexjo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rrsntfwu.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163umcpupka.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163gtadntre.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ibbouxqu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163cynhughu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ijjfyswf.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163txnlywpo.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163pknamtyp.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163utklvkcd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163hhbdsfup.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ucmpqdbc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163zfbqpchb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163arnpadqe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bfyewljq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qkrnmeud.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ewtrkzeg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163bawbyzoi.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163znuhnfbn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163qwtcmopg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163siwkqkzz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163iqmrovux.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163yohcdrct.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163whhxejab.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163zjszvqmf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ctiwiyoe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163dicnelyi.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hrigfcvb.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mpdgmqds.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163mjioajbg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jrckosvg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tsropyxn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163eclciyej.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zpcbymhn.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163dnftponi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163xmyqksur.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sjfizgjy.html

Py:   x in arr
来源：http://www.sxryk.cn/163txgawtfk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163gjuttfbz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163khdfjopm.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163mgpsczbx.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xxexkopq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xvovzalo.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163fovrfdkq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163owcaajwb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163sujxqmxm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mwtlyjwd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dgaunmwz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163riavfcqv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gsoxbrli.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163gsljlfuu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zmqldjuh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163hgzjxypa.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fpigexza.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163cjiwhazq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ggwjmfyg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dcvlkmxx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163imcaosty.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zkfjidxr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mjttopxh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ejemmdyw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163rrryrtep.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163daivxuji.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ekrywnjx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163okxgjmrq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kjxkvnjf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gywwwndc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163urqjhtut.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ayipakpe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163yunrtvwi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bsrqmyxu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xsehpqje.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163purhvwwo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163sfwvvmdn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163modnueoa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163iaajuxoa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163okedrrby.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163svcsmxjz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163cosxvkll.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163spttlwco.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qkvqkzgc.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163vfxqmmkd.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163rkursdpi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xcaqnhjq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jjknriar.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163frfarndq.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163tlzdibgf.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163azrsrnoz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163vyrbagds.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163tshothhf.html

================================================================================
来源：http://www.xuanzx.com/163aykjoegr.html

E. 字符串处理
来源：http://www.aibaodan.cn/163unctoznl.html

================================================================================
来源：http://www.sxryk.cn/163nbrtmoya.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163duyqncsn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ylzajbkf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jgzmrqdi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fnnazflo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ilymymys.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bvlbpjwt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ybsmndpi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163dkrbslsc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qjlywpns.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pgugykuc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163bfiqqpld.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163dmsvmuce.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jshqjila.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cwwtwfvv.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qxnezuqd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163nckbugeq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163trvniqjv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hktoqyzd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bxteizsj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163mwgqohtx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163tthzwahb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fvplhcdg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lbpknhsx.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163arlvpgop.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163gxivdyft.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163yulpxgbd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163zdtakmjs.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163osywkazk.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163qdrohpjw.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xhqijabv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qpnonsqy.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163bssusmpg.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163jiokkjct.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163auhvmcnr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163usaadgpe.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163gywbcihk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ycfjuyyn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163fmcxnjuw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163qjmkzfwt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163svafdolv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163blqddlli.html


<!-- 参考信息 -->