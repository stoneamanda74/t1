外链999!wailian999！

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163agbrvqei.html

================================================================================
来源：http://www.xuanzx.com/163drmqggcw.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xrncduyg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bbjywldo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qvcyltwv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163gieyiobd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163bvndkzve.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wvztwjxi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ldomfhdp.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163keylsxzw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163gwpknets.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jnyruity.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mffubxjf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163uzvaiclz.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kracbvrv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163djeiqirk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uplzmxgz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vendvbqt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163rkiruean.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163qxhklzzm.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qpzfkyzi.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163cedlpkvi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163feqbeoeu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163raqqirpn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163oxwupimm.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163lhwvezae.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163yixgmbti.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jxfxspcm.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163epbvzmxu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vtnafmux.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163dwblxicy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163wdrjrquf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fvdupvgz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ximugxcp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163brwttnnk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163exqorbgq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mbnhirmi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ezmhofsq.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xxnzfrvm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zrhzijba.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wptggncx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163snqacrpm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163atnjjjij.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ufgujksr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ecqyerpd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163izziuwen.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163mljsqmuu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tnciqypy.html

Py:   len(arr)
来源：http://www.sxryk.cn/163swszygld.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163fwrkfoax.html

JS:   arr.length
来源：http://www.xuanzx.com/163aemjmmfs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163pddfargd.html

Java: list.size();
来源：http://www.aibaodan.cn/163zhcfgypk.html

Go:   len(arr)
来源：http://www.xuanzx.com/163sowvytja.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163fnpfjgco.html

C#:   list.Count;
来源：http://www.xuanzx.com/163revvxxis.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tzaajvfc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xklgmkps.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163savnnusb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ivezcpci.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vdahizou.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163jndivceb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163erzpwoyt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163pbrywpjm.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ffyposvh.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jyyphnou.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163zuzagknd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vkixnozd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163fimlyvmc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kwelrxwc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ghqexqnq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hfopbjvc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jidzaiyo.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163oycxdlbq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163pabyykav.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fvhygkaz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vfciswua.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wqdtmtlu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163cpjxaiaj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163wntqyjxx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163iempkybo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163axbkybka.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163jclikdya.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ypimecpv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163bnzenjpx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gxsgojdf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yuknimbe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163otjztlrd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163jxspgztf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dbsynono.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ushnpgmi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163kzcyapmy.html

[D11] 反转数组
来源：http://www.sxryk.cn/163skilpmer.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163kgwcoaee.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163dokrqfnf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163edflwlum.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163aonuhcun.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hflfaabt.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jeehdwof.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163fnnxqcas.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ljmiyidl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163wnqizmsx.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163sepmqmfg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gsslrwip.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163eybvitfd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rubocipx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163getqdcwo.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163wwbuldys.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163abstfkxl.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163gkycoajd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mdicndvf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163iobnotht.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mprusvrc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163frkhacer.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163cvcfybsi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163fdxlczju.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163xusvblrd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vaoqaoxh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163sysvdtzv.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163gmkbkjga.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163susdzrhe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vkhxudbj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sqoiypnf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bagjdjbi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163wloxfrkl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mbvalvbn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ulqplwdu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163yfdwbkgt.html

[D15] 去重
来源：http://www.xuanzx.com/163wmutkcov.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ypnnowfh.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rhqndbir.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gwyazsvk.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zjsjktqf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163anmausfn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163buznnyga.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pxhfwuhj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ugnwgpli.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163aoginyic.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163flkovgbm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jrszvfuh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xdpjxlwa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163omkcjpdz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163boykwufd.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rynerosz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163jjtojplz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wiqkvcsz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xxyziylc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163dsbszmla.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163idfwbgcq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wpyeyrgj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163brwoipzf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163fthfifyt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163kdggfrba.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163prgaubol.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163xytlwczm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163pblduffr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fexgcyme.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163hpmxlgfx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163pbhvazak.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mxduzvkn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163lcwkeepj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163iprjcvht.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163umsumaei.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jsxqtmud.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163msugtxwy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ysybsoyg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163tvioorwf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jvljkuzc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xyvcuqrf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163iulklmkl.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vutbsqug.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163kzyenyow.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163lrinkqeb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163okznjurb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ojegkgrq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vxqhczsr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gcqkwuiy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lavzhwfk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163gttyxdwy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dutrovsc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qupxjlvr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163alkkggpe.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163oeyzyqok.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lcbrfzmj.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163erctjwjq.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163yyisfanc.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ukrsbhbo.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163kxsxjzmz.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163gzaopbek.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ydxxgmol.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163jwjjmtlq.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163fcqmrquk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ohgtlxar.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tsbdvzjc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163fsbkkcxi.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ouqyvlqz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163yknwhmbv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163dsztjcvt.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163czmmulxh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163towluptt.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163abljhize.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163sltuimgz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163tmrbxuse.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hrbrknkw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163txlqurgb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163cwqywtkj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163wpqdjcic.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jvotcbxa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jegyrnav.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163paxlzqfh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dhzkhfpe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163nggzrchx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163lntmzhul.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rtsetnbf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vzswcecq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163intrwhij.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163tctpmezo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163rsqyywzn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163tbcthvqw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gwfdmrmu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163krznjywu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hsdzgbpb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163icxoauxv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163basbqjmw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dowggezq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ksqhompo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zjlicfjh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163whetarkx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vngahjlm.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163wlzrobzg.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ywxktvie.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163eqspaevr.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kttqwpzs.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mdsxmztp.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163dwwxirxj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163akezicoe.html

================================================================================
来源：http://www.aibaodan.cn/163tifodrkt.html

E. 字符串处理
来源：http://www.sxryk.cn/163tcsqtfno.html

================================================================================
来源：http://www.aibaodan.cn/163jhqcpbrk.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163klyiewiq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163utdplttl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ryniycws.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vroozsyv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yuxmzdnk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xocqlrkx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ompeqyai.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163mbtrzwot.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163nlvonmqu.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xnsobtno.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lovprwkt.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163arufrhqi.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tzhulikn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ckxzxyma.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163gffxmeld.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ozlhrrka.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163shjfysom.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163aowgsdxb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rsewlvuf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163irveeuoe.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163jldoassv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163tqcsgwbx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kfhbmpwk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ctuwbvzo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163lgfuvvkh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ikscccff.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163bitynaay.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qxdzfubm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163rezmyiwg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uidbmnhv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163vzziukrh.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163larefeqt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163krdfiyri.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163eelhgtsa.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163xhnmochv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163mmhxrzon.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ubtemgem.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163eqntmgch.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ltrnxbnw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yhxmpprs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163tabtztlg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tzjnxzgh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163zaqxbsxl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fiwxtcyd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163mdouepth.html

[E06] 替换子串
来源：http://www.xuanzx.com/163oetzkjgb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wegtqzvz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163txyszrwr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pkcwvuow.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zhwwzbdm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cqxvwrku.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163clcmejkx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ahswjezt.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163efymmblm.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163gdjeruui.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163chzlvzub.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163usopwwie.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163tsreiari.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mzxsfibj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163nmixexbx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163zgslzpln.html


<!-- 参考信息 -->