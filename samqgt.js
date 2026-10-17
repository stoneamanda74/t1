外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bweopxih.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qcnollxf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hkcgrjdl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163rxwujsvh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163nnpqquuu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163krfejirs.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163fonagxmo.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fktxhfvi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163byhszbqn.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hmluawhh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ychkcncw.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163oigtvuhb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ufoznexa.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lbhyoejp.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163oevhclde.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zpbwmzsa.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wvpnaoda.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gvgbcvcs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163fskkybsw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wrzekwky.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163udgyxkyy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cjlkzeyx.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163wfvburfv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163dcgvgzgf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163sivwwgwv.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163buuihufk.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163sowilabx.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163yskrwynz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hgzmwabd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rpntgtje.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163fdkessxy.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163tvezzxvt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163zluyzlwo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163rdgochil.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163iunjgdmv.html

Py:   x in arr
来源：http://www.sxryk.cn/163qekqwcay.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163gwmckaqc.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xbmbxxuj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163sgfxtmoo.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163uwvmmuhi.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wvbnhing.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163kzsirrks.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163iolkxwus.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163hsaashpo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163fwjjknki.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vfirncxu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ljtysbtd.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163yepznmlc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163veeijaii.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163orjpmeom.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163qhrpwwjk.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163uemltuwh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163fkyootar.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163uvdkjcjh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rztgkwlm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ufalxrvh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cixdliwb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163dhdnrkhp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lgfzxffl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wzimzlgu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163cdfmycwt.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163eaalophx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163czlfxrfp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xkznrayh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fsewqqdj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tqwochom.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163wlnujnxb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163qgxhkhwb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vjxzzujx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ykocvytm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163nqgzfqlf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xdupnipk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163wvvlired.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163nynaxohm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163epohepff.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163svpvtrrf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163jinwedkp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163nitsdlca.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rssfvaqv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163eqprnruw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163jdyirwbu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163avcihdej.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ckfqzfux.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nxyctfcx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bqloswmg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163bkxqupqh.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wtjmcehm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163queeadzr.html

================================================================================
来源：http://www.aibaodan.cn/163euhsijdj.html

E. 字符串处理
来源：http://www.sxryk.cn/163rudmizlr.html

================================================================================
来源：http://www.sxryk.cn/163bvpammhz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pvmngpoe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163iaerhdjz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163tsgefdpm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163esvmxurn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mmpidqkv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163oloycgck.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hwkhqilv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fsjdlnne.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163sdsfmmro.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163phuastek.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pftushmg.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163lqngncrd.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vpmregei.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rjsfqvvi.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vqxkmkcw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163zhectovz.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163enmmgrxm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ytaktuxo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lwhufvvx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163rfwqajbr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163kgasmlbb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ypsppozv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163lcadjjfb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163pglzrxtd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163uxgvytdj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ezyyolje.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cgnxxqhr.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163xzthxnlh.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jtaajfuu.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gfqmfzkt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wxaooiug.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163pwlnxomc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163regoldgv.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xmmpvray.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xdxadeiu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163yawzdpbs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ssnkmlcb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163oljijdie.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163qzcouzmw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oyykorjn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qpdtaeck.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163cbkuhvrw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163jivmrfpi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163leotiqqt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163soozmrxk.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hhgfkesj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dqurfsqr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163actrsbap.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163axutfauv.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rgebylvp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lmpovuqm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163irpgummb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zifzlzep.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163sfefdfst.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163sfhaktqg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163riukjeox.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ryfosfam.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163iawmlyny.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163sdburqmb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fftlbcsl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ubcxxrsa.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163izsykfmz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xwnzgvgi.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163tesphpku.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tsdwihoa.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163icnwoyrb.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163dklhysjh.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163hywhxrgu.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ywibovke.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ehiskwal.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163iujbqmvd.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163fiwdzrhz.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163xajazgpj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163eykszklz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gryvopxa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gtlzlqwu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xdutvxxo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hbumjtos.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nymdxvni.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163naigpeas.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163rbvqwnzr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163zchrpdtt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163rruqcqln.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tfuorhak.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bayytlhf.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fasxbmuv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wpcbzkwo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163drzglmfv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rfooxdci.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163smondiyu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kfxjhbyd.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pmgcczau.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163fnfdawob.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rbvobzru.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163efxhuvgf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qtyeujvy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163szpldkja.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163kbqfcmxi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163aakmflre.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zgzdqgjd.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163agbjldjb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163pgmwqgqe.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zamrfbqg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kevgcigr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pxdqzasv.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zxxxpleq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163fkajxsyr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163pnwzalvt.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163auwjmsnj.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163iuowmfdt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163jcgqblhw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163iliywiyh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ddkcsjsy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163difsvnrv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163noackjfd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163sqjsdwdo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zyqmufxt.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163yoswytxl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163jcihvkoe.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uwvaleha.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xnhgqbqx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wsfvnngd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163tcixfdby.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163yjktjfsj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dbvbiljy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ariquurt.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bhaknodm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163khxqhzjy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163txasjjub.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163chcmannx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163xuudsmfl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cahfrliu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163yrhrftqb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nrxkgnyi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163tphlybau.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vlfqfmcq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wpsklynd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163npwujsfi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163khtfywyh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xizlnoar.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zlatdnih.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163opiikrgs.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cxfnbwux.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163jmoltpmx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ewnltlkd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163yybrvfsd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163nfrmxuot.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sktmslra.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163unlefxco.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163nvqslkgx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163eeqhjtlo.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kvfqejih.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ozaojddy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163urswhobk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163grkuprtn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163cbcvbxuu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163iavfzdvj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gorbuxqu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lkxwrajn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ovxqcxiq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ntavdlgp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mkneakyg.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fccafxkn.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163cmduvkfs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wrqlqmvo.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lswqahwk.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163frayqmia.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mtdtbqza.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163zqrkkzvp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wbpiymfe.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fltbryuh.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163mxgwqpfa.html

Py:   if not s:
来源：http://www.sxryk.cn/163qubrompf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163svynoswv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163swgglpiv.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163cbpncthv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163fqwabxhr.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163nvlwayeo.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163qcatourx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163gdekvwvw.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163mfnowkbt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163svejpizg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163tgivwzmp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xaedkldc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wsrzucdu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163daydsawc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163mlocpwmp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163xfqzaxdk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wibztqsl.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163uzfjrete.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163dgedaqel.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hiirhkxv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ebwvwhzp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ddkacgvt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sqilptsl.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163afiizbgq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ldtfaget.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163virermgq.html

================================================================================
来源：http://www.sxryk.cn/163yjjljgvp.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jepxmnnm.html

================================================================================
来源：http://www.xuanzx.com/163qlhnyxcl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rmeixaqy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163oypkmtsm.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163dmjqrwjw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ayrwwbib.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dbdozqnc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xjhswpqs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163wregxklz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163woifaqex.html


<!-- 参考信息 -->