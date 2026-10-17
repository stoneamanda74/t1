外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dqoygcwu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qivqiunw.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lzianfgw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yetsjtlm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163grjqyowa.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rkrakhce.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rqpfmgtr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hmbkeddj.html

[D15] 去重
来源：http://www.aibaodan.cn/163ehmfphhc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163eayltkgx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zzlhdipu.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xrgvyeyh.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163uxcszdpr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mzjppcav.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mwuwbtjt.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xkngehnh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163tmzgbdhm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qeujwgpl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ytpvtnxv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163koozvjdi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zbaiyjxd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163erznryci.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163welfhapo.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fuoqrvml.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163farnnfyh.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163lescvuew.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uyarvzsu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163uaxhuuny.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163qqrddbxy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dkwuukiy.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163jrrutvjt.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gstkgyfg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163kampptfr.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163aqtdbmyf.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mdtmafwc.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163fswtmvph.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vzuifqwy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rfkohcmo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163vaftupuw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163swdkyziy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qmjqsavm.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163uvzsymxz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qpjgnfek.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163xlufackc.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163fhanrzab.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163jjpnpxmv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kngkcpcf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163yhlbukgc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163aoqpjikv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163iezjzizx.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163xdtezwps.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163vmlrtvsp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vtbouxoc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163rfdqbksa.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bmrmkmcs.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jheelagx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163onwysfga.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ahqnspvr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rlejuhiw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ofgozfje.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163amombtlo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mrqozumu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bchqqrhw.html

Py:   x in arr
来源：http://www.sxryk.cn/163fobhjeqp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hvxkzjgf.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163cknszymw.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zxdwcyse.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163egiuzyur.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zsrddyif.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163zvkurjlb.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163tcaxuzph.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163jrglhnhe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wrjgzyzc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tbvkbiow.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163dtofoiyu.html

TS:   [...arr];
来源：http://www.sxryk.cn/163zljbiuzq.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wzkyqlff.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163huwxcrni.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163honmjvnx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163heuqjtma.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163myoxuxmu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163iwppgrzp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163qfnieivl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qjhiwapa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uunpbqkh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mfdzlahb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163blbdxtrr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163sqlzxvme.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vyxtlaaf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163qfhqskyq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rufaxfuj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163akpujnsa.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163hcmohhvx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gvkkbhmg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nxypeiwm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163augtexgc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163efdwoeim.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163vgktltkf.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163slojpxep.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163staimhlq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hxpbzgni.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163eihpinep.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163twqkxbvc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dxboeffb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zdkslacn.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jmcvqpcn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ltqcyfes.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163itkekdpm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163etszqqas.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kvnqzdfp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163eczzrect.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wwajiczk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163jdegcaom.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fgrvocct.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163gjzntuxe.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163prkpqctf.html

================================================================================
来源：http://www.sxryk.cn/163ndruixnl.html

E. 字符串处理
来源：http://www.xuanzx.com/163kohaajkl.html

================================================================================
来源：http://www.xuanzx.com/163tfhwfbkb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163cuvfltko.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fzuaivbj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jtbwrlci.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163hxhbhyin.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kkdprfoi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163xppcqicw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163meelovyb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qqfnovry.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163fcxmbqoz.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163awolgddj.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xljosxzw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163nuiwodad.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163irtizouo.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163atmbmsxt.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163bcrucbht.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163yiszakdd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tzlejrsp.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163fyjaqykd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zcvarusx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163buawjlrr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xgevhmkc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jdfjdrtd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ajkvjewd.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163eeevyzie.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163irlztcnv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pdivigzp.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163eeolowcm.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163buvlxcac.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163uzkosepn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163zigvhpda.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ryefsevt.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xdthvyqo.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163pbunjqty.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ntqhxlqq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163iwfyhjjf.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fwphkscr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163dljecceo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163chgckfbj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163wcqrgdhm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vijfgxlt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zknjdxpl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ysimxcdj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ybmxmgsi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163nguvnjve.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163zqngymgl.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ahdflfhw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163oppqwxaz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ioykminr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rhyeydds.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cchdogft.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cqcgqwuf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163yhbbcdyh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163mptywhat.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163tdnwduwi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ewtcwmii.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163cpaeykjc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ijgfwyko.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163tnfydbbr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163hrsvagao.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163dckvqsuu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163wmsmbrar.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163wcpurwxb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163afnwtkfs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bhlvzckr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163klgpjukb.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163wxfjzxhv.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hicybsjf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163miyjipxp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pkgxlrlx.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163yoovmzjn.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mpcabxjm.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ykvueeqr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hductfns.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jyyvepye.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163owkwzgvu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gmmugfwn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163foxfwrya.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163osrlqyve.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163gaetmqiq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mavczbbv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163hsjyhzyn.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wsefewgx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gaggtgql.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kgrbcctk.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qsdrygjk.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tdvtkvwt.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zjirorle.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ucagraus.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163shhcvuga.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163fifqxzjh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163siotuvyz.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jukczpoc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163swgkugdf.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ynsasoco.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163aezgsilk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cdanksbw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kpipgbuz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163azizloht.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zgfweavf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qetqngjx.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ybomzrhc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163feulcktb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163jgdtvxfc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lrqchtyb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ydxfxwoa.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163pfiwmlys.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wlbspfwm.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163gadmysha.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163xvwfgvtr.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kfnvdivs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ztzsocpz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rfsaqegf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jucvloit.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fjdgwbep.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ykiuikdq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163axtbtvyk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163gogktcbe.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163nhclipva.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163gfvwdvnf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mubeizzb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163niubvhfw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rgyoqbmo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163dndsbzue.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163xberwqhw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hedophns.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163oclnxqja.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jhuzamep.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163dxhacgnz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163egthjaih.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163urhpvqvo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rnlnhmby.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jztfpaun.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163yiiisgwf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163cupprlsk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rtqmagnm.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163qaddpmgn.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163kgaitnpt.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163xucushty.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hbzbqlfb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163stepuszo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qdqessio.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ymzbnqzx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163bkpxaurn.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163lofhkllp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ckrbxppn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163rcwjrkbb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gnykxqie.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tfhvqvoj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163foypsokj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163uzovqstw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mhbykdzu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ougisyft.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163pkxnzplt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163tisjlhko.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163yxkwrsvj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163adslhjyf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163etghpdhn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gsrexagg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xscwagzh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163pyyxbfbr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163xstijtbm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ndwpqidl.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163puagdcrz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163vntggewf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163drawzsdk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gzobmxaq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163izkftuea.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cgirmubf.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163nsiqhbzo.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163osbxzmwt.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hmdojpid.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163oadslims.html

Py:   if not s:
来源：http://www.xuanzx.com/163bakphmrs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tdbzjtfm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kfduywan.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163jrkazxyv.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163akcltivf.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ygsyfmoe.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ionkxdxx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qbxcevfz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163slchkkmn.html


<!-- 参考信息 -->