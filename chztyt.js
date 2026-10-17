外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gjbosalq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163iwtpgxfm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163lxsyggwu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163sxrudnmp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163cxtchcvw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163lsmbnybk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163puvvdoea.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163dptcslrc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ypskzpyv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fqkchuvm.html

Java: // 无解构
来源：http://www.xuanzx.com/163steveunw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163citsadhj.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vuynkrje.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ijucwkns.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163fsnlrkkz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163weqfwcmv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163zmafftae.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163fulvpjwd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163vtsuuosr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dvvdtvoh.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tcgfyjtp.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163adzlamvl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163lyblzarj.html

================================================================================
来源：http://www.sxryk.cn/163ofxsdkpe.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ezjhydgv.html

================================================================================
来源：http://www.sxryk.cn/163zcnczkpe.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163rzklowgr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163quhfveak.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163raurfevf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163lcqsdmge.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163duenxdbg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163wlznpsai.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163pafsseip.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ddasmros.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bcopwcmv.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163hovdqqiz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zetzyvnh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163rqvpgpzq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163pvpobffg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ttywoigf.html

Java: list.add(4);
来源：http://www.sxryk.cn/163fmjzhyal.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163cpviacuv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163jemgqfws.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163lepxnscr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163hfrqmxgu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xknwffim.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163cawbqrro.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ipcojgcj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vgsfkllz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163uioaexvt.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163lzjhnjav.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jsyttqzo.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lkaiqxmg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bhvccnad.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mmagffsy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vmkafmvc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163qcvawrik.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tpiqurwm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163sceishko.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xbajicvg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163quxwaglc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fgrfkfuw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163qtlqxabb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wyfoplki.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ghokkxjn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163hctxxrru.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163hhfojgzp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163snoorymt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xxbtxsmo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wtvpmxkq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qcvgdcjc.html

[D06] 数组长度
来源：http://www.sxryk.cn/163htwgqbcz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163exboogne.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zmfuvbgt.html

JS:   arr.length
来源：http://www.sxryk.cn/163dufsfcku.html

TS:   arr.length
来源：http://www.xuanzx.com/163usscgnuc.html

Java: list.size();
来源：http://www.aibaodan.cn/163yxxxowzw.html

Go:   len(arr)
来源：http://www.sxryk.cn/163lulvvuhc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163lnunjczy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ehxotyig.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ereoguvp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ecbyuxnw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163nmbnuzfb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163scxmittq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mhzqozho.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163migpnesf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163snwwkbxs.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kvrviewz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qcueblsg.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qyitzvof.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163hhnkurvm.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mjopjtdq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ixykuwvr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qdsfyije.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ablskmmt.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cdxteywo.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bandvlxo.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163kjfnkanu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163yaxshdaf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bztmssps.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163njfezpyz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163idutkqnz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163sfwzsxcf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163wjzqvvta.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xpbcgnes.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fyndysko.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jxsjkaio.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163majrnyaj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163yndkjgec.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xemwudfp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163srvzmcne.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ulrejiqy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ealhhkmz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163klzlgaqo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ubjbhjiy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163zsgcdxfb.html

[D11] 反转数组
来源：http://www.xuanzx.com/163vswgmaxq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cxfratcw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ouflrnyq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163dwheodjf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vhcyyeyi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163emddgdwk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ahdsujod.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wpxzzdgi.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mfhdyqoa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ezbieemy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mwrvtldb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dmukdbgx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zrjkdnwo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vgtqgvyv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ahjcjigg.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163wusmdagi.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163sxuxzssw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163zazsapnc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163cporgooo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zhmfjfma.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163dcuwxsar.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jufdwnbh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163woslpizm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163kehdqcjn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163onpgjlxr.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jaqrjqta.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tewldmbz.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163skspadtw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kuugvgbk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163lmaumayn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163tpagqlal.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jtmsocrg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rnratmuh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tiebdjqh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ymfqdhfp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163iycunxls.html

[D15] 去重
来源：http://www.sxryk.cn/163bivivsjt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nznovuko.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ptevqsrs.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ldgeqltw.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zekwexnm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ivxontzt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163veemrrvn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163niunstqh.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qejnzlkn.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163vdrjthcq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ojkcldap.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163znwixvhe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163norlotyk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163orwshehs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hzarusez.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163pqxcbudt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163eohnvfen.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jekpkkwt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hksbgsin.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163rjlstokq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fqephpmw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qdxivxfe.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mbjmvhwr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163wgxtdcqv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163gqtzjhan.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nfsnhxci.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kuzlcfxv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163piugpphz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163shfziwwe.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163xpgzxkmo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163hvuqfeup.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163kncqnwtf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163anxcmifg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xrhyvhoh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ngbjccum.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dvoecfry.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ueeoychk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163xtunqfkn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xhgxnwgy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163fvffjske.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vnbaapou.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163jmvviawb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tstiolqj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163mdkxlqnq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163bgbdjalj.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163hwhxuxwt.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163biteruif.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163impaniao.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bmonhliu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163olpkabgw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wzhhlbxs.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bzijtagb.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xaqhvvvy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163braylcag.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163fxnyfmzn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nygnpusr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163outaspje.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hhznnrwv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rfrwdhfk.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163hqndovht.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rhzvofzm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dqjcxami.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163syewtgab.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nnwtrqrv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ctruwnwa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163yfmfbkfd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163undofvfw.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163dqtkclcl.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wmeudmos.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163yhjauiux.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xgzrchls.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163evymgtuy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163wjsucwvz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163gwueaboa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163orfrlpzr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163feryimpk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kwmkjvhj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163kvhbwntw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fojalhtu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163sktcjkjw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yeigaeoa.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ervbgoyg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163lahwvnyk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qxtslwfe.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jynuqjwn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rzlrkpaj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163umgkdsjs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tjhcjloc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163shzkbmad.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163opugavip.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163xyfxjhxk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rkmfetit.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163abmuxcky.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rzbmjhoi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zgqheugf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163cifwwxut.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163zteezbwk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163lmkuezxf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163tdwmevab.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163sliueqts.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rjwkmchv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163wbopwbbc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163gdhxmqsv.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hlauiysr.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ospfxhms.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ezlqcygm.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mgrcgkte.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163uevpwwew.html

================================================================================
来源：http://www.aibaodan.cn/163fpybojxm.html

E. 字符串处理
来源：http://www.xuanzx.com/163yjdqvgrv.html

================================================================================
来源：http://www.sxryk.cn/163kqlbspty.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mxukfzov.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ssnhauaw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163rryvveoh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sigxwzdy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163erhdeazg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vqugwxti.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163acjfeodc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zesqmtch.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163snoiliwq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163bboehqfj.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163jnyoxljv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163dzflgajh.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163iojedkmb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nshztivx.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fxjctnba.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mzojtzrr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ugxxjotp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jlbelnvf.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163urzhgrbf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163iivfdynb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pkpalkws.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ntzutmhb.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ywlmzcqg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ogyajonr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163jktintko.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ihpkaque.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ngafrqco.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pclzbgpg.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163itpamozu.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163lysbhyje.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wnckgexo.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xdwyqvcd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163iypznohs.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163aiqovjbe.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163hskpuhlr.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vaqfmbxa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lcncrwlq.html


<!-- 参考信息 -->