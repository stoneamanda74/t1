外链999!wailian999！

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kuoycjeo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163flatdmbq.html

Java: // 无解构
来源：http://www.sxryk.cn/163gskiorsm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163joxgkjya.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jtwqctai.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163mglkespw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163iqrnnzpg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rrltfjry.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wgfpgejk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ngskuewj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tpownsas.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vomvytqh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163eqzivhac.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lpjpvyzt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tcwvkmbo.html

================================================================================
来源：http://www.xuanzx.com/163twgmkjxn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163bofeuwqo.html

================================================================================
来源：http://www.sxryk.cn/163lueptwiz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163emgdfget.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163sijsdibz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163dsmucohb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yddxxxck.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163babpituv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fdbwxziq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vkubquyo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jwkubrwa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xkkuhahu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163uftfjbwg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gfxykost.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zzjfsphc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ksbevlqg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163caprpoie.html

Java: list.add(4);
来源：http://www.sxryk.cn/163petzzxtj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163slfbrakf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jhvuzayi.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163vlozdawn.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bxrtwahr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jnwlmsjk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pvtiiqcc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rsxsfkog.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163axrmkpam.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hhmirovj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163jzfcunen.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163yxxornhx.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lrknmqva.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qwobzcri.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lyciistg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wfwkxieg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163kluetqaa.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163loynwimv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163dqmsxdjh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163hmpzntzd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hansvdow.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163gqirafze.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163zmqsbnjn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bybncniu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wvwutxqi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wjxvlkqu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ucrrrjla.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163arhbahws.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163msxprtzh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163laphiqoj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163dniioajb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ovdgbfmp.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163knaahjdc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ngoiijpu.html

JS:   arr.length
来源：http://www.aibaodan.cn/163txcpuqoc.html

TS:   arr.length
来源：http://www.xuanzx.com/163tkfyaewe.html

Java: list.size();
来源：http://www.aibaodan.cn/163jqlplkdc.html

Go:   len(arr)
来源：http://www.xuanzx.com/163oncjmiag.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163sastanpq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163uihhwxvl.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163exucxvdl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nibfrjkr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163irmfhnne.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163evckqoec.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163abdrpddt.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163examhlwa.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163eyiqbwqa.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fsqrbckk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163lqermoyb.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163vdqpvsqv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gsxprhme.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sntmuybi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dczdocte.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163hxqbolyc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163qztfhkjo.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163icbeucph.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163gjqudssw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qjveflix.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dnhumiju.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qvdtrtfx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163rwicphwy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163inwmtfca.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mtoakdix.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163rybvbrgj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163dwmbapuy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tdqycthu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vjvcbrni.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163pzdeweyl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hrgsfcfh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hjtiaogc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163otnhpxcm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dggotyih.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163spuhmmuc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bxafiwvj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gvzkndwz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163pecictkl.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qwlakgxm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163bojsooff.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wzkoyfjj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ovqvlxyv.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qldqvdrr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163lbtajyro.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163miritvcp.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163auvnihqc.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xedltmlf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163otvunphx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rktbvvdx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163puhadcdj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163grwrgwwu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ordkyvhp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163crxoxcjt.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163yeruymot.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cetvuxwk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xukzngxh.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rjfwoteb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163afpxrlyh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163prmjsivh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vzkdcvuv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ihoazjfw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163fkgwvvqp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bxalnkbg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ghwmxcjw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163iwhwvncl.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qpbublcv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163icjgqndu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163odvemxdx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163avkfdglp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lpayomsh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kvedczer.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ialfeojc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163pmjrebon.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163cjwentrx.html

[D15] 去重
来源：http://www.xuanzx.com/163zmxpldqx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163glmshqvt.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ksiqiwaf.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iydcpdyb.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xwppsyvs.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163glrgxrmn.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163darivzao.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wbwslcrm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wfscdcwz.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163etctbxao.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163pgkxkafs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163bjjgtqsn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163moejqnty.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qwyioqba.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163bpzamcma.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ymvhctzm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163xlvfivda.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jeixmipc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163dnkldblx.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163nwzdjgax.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ftwmuxnt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ljpwckzj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163iogkuobp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rdxerjmb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vtqoznht.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163twwkvrki.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jsbbtkkx.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fgaetzry.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zjqdlpzt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wzdctybq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ocmzckzr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zdporcgy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163imkitngp.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163tnudgacw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hdxvgohp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rjdgcjwm.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163uvchpkkn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fmeloopc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163exreqcgu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163dpokbztg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xsjvxarr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163vruczzym.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163sfiuzizz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163vtnxhobg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163nlpmjxph.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163sqrhggxk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bljgaxzw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ycbodwtm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jcufmqrv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jnrfmbjg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ypdqqdzv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mhofwmxl.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163xjfeehrk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ufqbzqjv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fpdcaoae.html

Py:   x in arr
来源：http://www.xuanzx.com/163fmiqcubs.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vaddzzlx.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xzirudyd.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163djxoepjq.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163txocjwdm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163mkzmlvnr.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163poxrvuja.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163asxaknll.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jvrozmjt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163abqaqkzi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163zoofsrct.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ywctwyfh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ivcypcwc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163iqvyftnx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jfztjchf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163afndrpgz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163dzklgddc.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163hahxwboo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163octwjbaw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nlvkqrks.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dvskvotf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pthpiohi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mkzdednv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xqlunfkt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163nqothrgb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fiezgwme.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163spnkhsuz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163svymtaaf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mefhthrw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163lazewesu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163nktwssgp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ylixfsiz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163pytmjjno.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ialbttkk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163emkvbcpy.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163jlvgdusc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ygvhujky.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163zrnzlbxj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xckebhfd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163mhkvfcph.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163tzaipmeg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rxnukpws.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163dhzdspav.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163luclgjbl.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ddnierbz.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163dgjkvnnn.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cbhrlvpp.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vvmjzhuq.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163aqyyfeph.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163otniccnu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pirrlybs.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163lvkvxwgs.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yvwvjuuj.html

================================================================================
来源：http://www.aibaodan.cn/163zqhkzaov.html

E. 字符串处理
来源：http://www.xuanzx.com/163lyicvcmp.html

================================================================================
来源：http://www.sxryk.cn/163hkdingat.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kjlgmuip.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jegxchte.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163imkkuglc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163sdbitgvg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kkzlbwoj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163kseesuuf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ounrvlkq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hhvvstgb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163vswdopcu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hzrkaykw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163waajicpr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gyofduox.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rjhusqal.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ozwtmmli.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163otrnqhvf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xnvksuyz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hrqgyiia.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163fwugqshh.html

[E03] 截取子串
来源：http://www.xuanzx.com/163fsnknezv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163pebsvrff.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163rjoolfqm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ovmyimvm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jpljzhhi.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fystcvsy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163elaqyyeo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163uzgtytdm.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jrncthst.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zyszciur.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fqwypaap.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163akxjuxmo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163lkncmzjz.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xoibjpll.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rawxynby.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163gkcygsdp.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163bfjeyfsi.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rqquvivn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163mdufzflp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163sdlsijfp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jxvfigim.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wabmfbty.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zoebjiko.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bctkexbt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163wbnxumge.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ybnzwofm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163huqcifkm.html


<!-- 参考信息 -->