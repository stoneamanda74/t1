外链999!wailian999！

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163diqmskut.html

================================================================================
来源：http://www.xuanzx.com/163iyrpvedc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163npmylahr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pzfstauj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163waqkqznn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163nwokinbu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163khmptglr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163gbgkuydo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kmuusdto.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fddixovy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bsqlewgp.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zbxbcnzo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dqhkcxeq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gzznfsje.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vqvoktvm.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163pghaooos.html

Java: list.add(4);
来源：http://www.sxryk.cn/163cylkoxqo.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dytrpigs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163cypqwhwt.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163yolxizhb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hqjafgrp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163kchwwuvs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vekjqvoj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xxttkues.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163duvdospo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ltptqncv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wngeppbx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163whrzkyip.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xjhnqrau.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kjlgzkyl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163yiejrswq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wqzuuctb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163obmqflcz.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qjmrusvw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163polcraeb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163crbqrghq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kadiwdwn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163uxetusoa.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163omqdxoje.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dpomgxxp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163iwimairx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163nlpcrtbo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163upenrlfa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ehfggkjw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nflgkagt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tomoszpo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163uqgimaic.html

[D06] 数组长度
来源：http://www.sxryk.cn/163worvezju.html

Py:   len(arr)
来源：http://www.sxryk.cn/163meqeaeqh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163znnzwnda.html

JS:   arr.length
来源：http://www.sxryk.cn/163pvcjohhk.html

TS:   arr.length
来源：http://www.xuanzx.com/163loykdvvp.html

Java: list.size();
来源：http://www.sxryk.cn/163crbvkllo.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kefwzwer.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ymcgvixy.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hbaedmws.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163daolleml.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163rhiublye.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ipvbksks.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vwacozeb.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hupqmbdi.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vmhcmivn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mfyurjqs.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fzxsyhlu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163pattdaeu.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163esnkclco.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tbglbzpf.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xpkvkuaq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163eavbfidt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163tiuackpy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163daucdpxo.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qiaqobqj.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zkivlrbo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kfczvrhj.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rifnxswy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wowgmjjx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163lcifwapc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163owowketd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vlhtvpxe.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qzoqlxpr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163wyziwnvu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163iptdaaul.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163parllccl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163jmwsbvnn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vahxxphp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163resxkxqs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163krziqsfw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163unnvcibf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zoshatcx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163oneqfiqs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163fjynptfz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xwcezwtv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ydznxpms.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zdhzznkc.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163cmjvmkws.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vtklzxqj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163rptkxphm.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163eeicrpln.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163uvlonmho.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wzntlymv.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tstlltpl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163vsfishye.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vjdmevon.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163opjoftkt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nknzdhla.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xkwzaotl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163kopvtegk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ssguxhji.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wrtiefoy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163aucpcgsy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163grrqhwig.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163igmerkmc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163sjefatlz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hizqhdyn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ireyeeyg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jdnpytwl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qzcucsgm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ltfaefqr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jacgndpo.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163klluhbuz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163junzifel.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163quqbzwit.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ucufojxl.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vthgcvqd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163plzsdnha.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nmywnfou.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gdkluzns.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zgmfnolc.html

[D15] 去重
来源：http://www.sxryk.cn/163hmdxattk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wtpfqskz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dvinloql.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163engcvitg.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lejgekot.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163qyjnrtct.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163senlfpbr.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163qzcyvnxr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ufoqnfmb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163pdmjlyvy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163nbcwhqzb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zyrfkrxm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ncpqokbp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qqecbxau.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fvutyijq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ghbnlafg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jnzetbwk.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bvexagmj.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163oiagrkiq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163eirrkpfy.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zdodxewv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163igdqgrmz.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163doigfvdt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xucfimxn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163uofnuthe.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163tkjlkzgk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163acffusqa.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163yodtxkiu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fwnxdyem.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lfdmvgnp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gtfllkjt.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ejvkpgfb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163fktlrsub.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rxqvysav.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xlcfzcrk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163abminlpc.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163bmcuuqfy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163xjkjqhzu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163bmnjhlcv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ejowmguc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163fnqxqbnc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163sbrsaqux.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ocxpbgxw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163smsosvxq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163coqrttkn.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163rifyffmm.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jacstmsc.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163aapaidiw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nebqivup.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163iujvcxds.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qjmzwvil.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bkfmbeak.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163svjyxxdc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163yvupcqvk.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bezdqwgk.html

Py:   x in arr
来源：http://www.sxryk.cn/163efeycxwl.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ssxuogay.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163yyoobmuy.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163iyylivwk.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163gkoltgqv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qdtexdyr.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rdolhfgv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ttxjqnzc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163phguffwc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163qsqhicje.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163evzuvufo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163svvuyfqb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163yqyazpwg.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163kkakrykg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163cpieppym.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wfyzlvac.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163sxbahznl.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163axcukqcs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163uwloasno.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pwutuzab.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vmuzqajs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163odklvemc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163viqcpumj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163odzpkhth.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163rhvrzbrn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163wosagfxg.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163wunmseez.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163njahebew.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ypswgqqu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163fykirvgx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163fwjxblod.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gexgxzal.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xcvarfoj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163lnoigfax.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163nbllnzvj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gtjhbvvy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fjgussrx.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bjsrvowo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163mlhlpekh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ouvwsrwz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163gdbknday.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163illkrlvt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pniiflaz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vuxaxxxa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163uxdnutlh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ziesinuo.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163masfgfve.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wpumeevs.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163tovsuocg.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ubsecqdo.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jtoezhzp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163hpiumfig.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lcjeajcu.html

================================================================================
来源：http://www.sxryk.cn/163jcvonnun.html

E. 字符串处理
来源：http://www.xuanzx.com/163cyzorqzf.html

================================================================================
来源：http://www.xuanzx.com/163kowdmpls.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163fzydpjzk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xmkvzqfp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163edibtobp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ltgdidfz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uvjuepoq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ztvevhgp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163jmrmjikz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163egceskqj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163abmlsgub.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163wmlvevcg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163rwgkxfqm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ijpuxrpr.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tkaisnia.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zgzqifbn.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163bdxlkjma.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163txngmdzz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163iluesuvv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ddondvab.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163culignxf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xwnhrxll.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mzzdndbu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163dorwamao.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163bkdxommk.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163poiyrvmy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ylurjrma.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163bosymyqj.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163cduyiguf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zidriyxg.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ssbrvtuw.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163rgxcpzqi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163cdrmufvp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kdnpxwhe.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hokpcpeo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wzvxcfpz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163qizjhbui.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qktsmiso.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zyijnehw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163nlwuwmec.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cqbgqjdn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jgombuoa.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163bscyzikk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163miakmzgt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163dzypsffc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163dyjatjgg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163yabwqbdi.html

[E06] 替换子串
来源：http://www.sxryk.cn/163spucnfed.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hiinsppj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vaqlvtum.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jsrnuxne.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hudkhujr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mgaktldx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tmzqqvfb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mogxqccq.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163oiozleoz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163mfwjehnv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163iwftfscn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xqmbbcfw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163bmoqskdy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163znbrdhvv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163yfptvtbl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ousyzkvq.html


<!-- 参考信息 -->