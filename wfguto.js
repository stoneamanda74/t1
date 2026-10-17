外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163djctuqrx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vhvpxlhd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163leydsdal.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lfzzgqhr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kijvdpju.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nkhlojit.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ehimitdb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lmhwyhtd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163rqxxuhad.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163roetlwhx.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163njbshkzy.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163hanyrzmz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nbobsazl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mjrmswdb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163evetokgn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163dvaujaha.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gqqtgibk.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163bgetngma.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163khfosraf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163agblqrzx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zjubryad.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ulqwcfla.html

Java: // 无解构
来源：http://www.sxryk.cn/163etozpfit.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bgjeofts.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nvhyzowl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ztzzfllm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163khdjyjff.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fegnbhmy.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163nmtgxsdx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xcpzltmd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163atelxahy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163klptxsxz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163zxhdpskw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163jipnykrd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ravjuaug.html

================================================================================
来源：http://www.xuanzx.com/163baorteap.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ptwboufh.html

================================================================================
来源：http://www.sxryk.cn/163vcxfnbfq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ssmavzts.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163spijtrgp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hqqxqmpq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163kjfmwxuu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163jfudkpor.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bhlzrbmh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163thfutvam.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163bxrkxjmo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163pzggcpgm.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qbrswiwl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163gwvzdiip.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ytkzhazh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163roffwyoa.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163blvmhaui.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ndcufxqm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163roijdyha.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163zmxwysjr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nucicbka.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hvwgybkl.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bdglfbau.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163fyypqomw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gkddafef.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gqswzpqo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163yjpvkwrz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163sbfdxsyj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163cpklmrne.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lshdikmy.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dxfecjww.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rjnnojrw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nanufdte.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kufzdmob.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163bncilprt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163bnqbcaxm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163szskoriz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163quvttwwt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163xbsbgmzs.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163nsrkwkat.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vlnddzsa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163eoiluidg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rabyxfia.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ytfokjsr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nravkxgl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163dyyzevmn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kvgatdvj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163gjzggvct.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bpawznwp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163kwpmkjny.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ddkmfcin.html

JS:   arr.length
来源：http://www.aibaodan.cn/163dmpquoma.html

TS:   arr.length
来源：http://www.sxryk.cn/163jgwtrlev.html

Java: list.size();
来源：http://www.aibaodan.cn/163ykrephar.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gyjbnajn.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163lcmiylmb.html

C#:   list.Count;
来源：http://www.sxryk.cn/163bcmnziks.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vbxqzesi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163cnjfqnto.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bavctgbh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163eucwqumd.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163brlfzrix.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vrhgkxqn.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zhotavxf.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nkaozjji.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163frbgqrwx.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163dayjmqel.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163uczwnclo.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vbonhsjr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163cyxscwav.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fluhkrpn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163hhyigatj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163dgiikvms.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163tbgxldqh.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hbwpjrye.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163xmoclrvm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lsxvmwov.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xbwhbdyn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163hgziwido.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163cbcyylbu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ynvootgd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wfzbfgmr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lguufagj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163fxclvsio.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ozmiicqn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dicliqgt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163otnhpbnu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163comhbgid.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163keydudst.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163blxbrxqs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163njfuahpf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rkmnfvfx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ibswgdul.html

[D11] 反转数组
来源：http://www.sxryk.cn/163uloimhgw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kildubck.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163jbhxybjh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163cbccrddi.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163pfoxvuzw.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163cqqihlbg.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163idjpxqdd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163auegujbb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jrqmeagc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163huzgtgll.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163topiemdt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163fpcelsox.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tdttkyqf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yadmcxwz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163pngdiezf.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163bxfqarbw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163pfprhllp.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hmsecuvg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163flsvtsqb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dequkxfa.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mekpiefy.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163uyzdvlos.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163iwrpuoeg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163yhluwkfh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163oswbuwly.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163sttztffj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163msukruaf.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ydyaeysk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163wzotxrtf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163pzlogwks.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fehfnqca.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wisacmci.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163haxvuyyv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yyxyjnuu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163xkaqnsox.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163akxcjpyu.html

[D15] 去重
来源：http://www.sxryk.cn/163dgmhdtxb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mhztxqlo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ckbagfql.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163oaxyhrct.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qrpzrifx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kokhqsml.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wslhibiy.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jeorwdzy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163bvcpqvoa.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163tkiozems.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163atsqedua.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zffarqml.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ijmyuyau.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163aeobeepy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nxcvshtu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xzexvfot.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163etwqfzmp.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rydgbffk.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nkwwnsjf.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163iduvcdvh.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jofiuktt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163elyxsscu.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163beonbftb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163lrsywewn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163poxhmzym.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163gbqdvwld.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163viltbbtn.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qdlmrxqd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tuehkjyr.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163xvahmgpb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163busqdloq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163jqehqjln.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163fzbzophj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ufcfdrqc.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tliwotpm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gblchdyx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163oyqaowis.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163jwrakybw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163haqzmmst.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vlfnvxhj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163chrvaqro.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163tlzcygff.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163qqjntcwn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gkmxnzrr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ilbhfgqu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163sytaokfm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163megxvycg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fsfaaudz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yovoqvze.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pkeovmgs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163kbdcxfbw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xdmhugzs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163innqycht.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163exebboah.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163pxywfsjb.html

Py:   x in arr
来源：http://www.xuanzx.com/163sbljkqyy.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163tjieosfo.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163lodlozkx.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kdgmzqyn.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163hvtafzbx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163rqlezydc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nhgcwhnp.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163llnvsfpn.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qrrztcwc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163xwsglpci.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163klwppkam.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163aczutchs.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wyyyaavl.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jvojkadg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163iczykoyw.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163wnvhesaz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163btivhoev.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163wfpbqetn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163kbyxhhev.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163yvhkwadc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pychpwon.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lzgnwnek.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163lsdodupd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zmvuhrgq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bqgaasys.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163hoabmzqd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163tzwmcbkg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163pwpstsfo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163klittxtg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fhmnjbuo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163vshfacim.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163gmjivkac.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fzaojbyj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qneozppo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163eltgdluv.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163nrwerotg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163mxxfaqpc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ymitvjyi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163alvtjzpa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163llaqhpdb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163jcxokqpb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pdeqtiyj.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xyqmebcf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163xdmmvfat.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hyqfqbkw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ahardtnd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163kcinrtgo.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mphzathx.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163iycyesrf.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163dyspmrkx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163msnsozou.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163uhrnjapd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hjhqtyip.html

================================================================================
来源：http://www.sxryk.cn/163capknoxv.html

E. 字符串处理
来源：http://www.xuanzx.com/163rwphppes.html

================================================================================
来源：http://www.sxryk.cn/163ofofuskf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zlzrxndy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ourcwhrq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163iobykczt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ufokhusf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jqxwnhvj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163kmojkwqo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163theonxqy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163teepqqot.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tummlbgd.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163qfhekkgv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163opcopmdk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163skoajrdx.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ngqztmse.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163islzlozp.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ohrmgvdk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ynbpzsbn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163pcywedgo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163rhirwebu.html

[E03] 截取子串
来源：http://www.sxryk.cn/163uzbieixw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163unjmtyji.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163epfmjutt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163aozphiwo.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ncgxvotg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163yutshtja.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163oyngdgvl.html


<!-- 参考信息 -->