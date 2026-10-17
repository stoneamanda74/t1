外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163fibbkebk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bikcrnki.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163pkbdcmse.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ldmjpzke.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163hnltltpt.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163uuzsqrox.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rhakvprm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ljzclltv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vywyrmpz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hwohjovn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163pfkqdqoz.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163waiajyip.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163acoyiifz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163wrffzfun.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ufwwydzo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mmfohjwt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163gzqwtebk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jaimynwd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163bjtuqlzq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nvbsaqtt.html

[D15] 去重
来源：http://www.aibaodan.cn/163sgppvjru.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gzkamwxp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163raivwacj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bkdaarww.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rfiroqxr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163dhjpzykv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163tueyilwn.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163quhpvljg.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163vbbqwtki.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jqqnaptk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gskapppr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163kyogteph.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gnnrthoa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jdgojnht.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ivyupgvj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rrqlptbt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163gfcnymsi.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xqlodlxu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uvzmjyma.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163qwgdpbgj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163yjsixinr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wvziyfuv.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163exlchgai.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163kshobead.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jywpwovr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163kyivcglr.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163iptjtvuc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dswkxsmm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xqgxbrlr.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163aqumecaw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uhfxtpny.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163minsjmcb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163uepjpuxd.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ecdluqpy.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jaoztanp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xoxqwgbb.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163lyhbkuik.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163aldbkhew.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fvzrhqos.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vifbdhri.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ggcmukca.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163llpwehnt.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ubxdgdvx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163uruminwz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vvzjdxvo.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163dqibjgsr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163iretjjya.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163negyivaw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pdizbuhi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xeeihkhh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ycptapyd.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ejmklsve.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gxkgxflc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ztuukmdu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163mvwktsre.html

Py:   x in arr
来源：http://www.aibaodan.cn/163aknoscmr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ffbyprfe.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xhuaowed.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163fuatueve.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gyneyjeg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163chhyrtow.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jbcnorks.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163afanacih.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163mblkqats.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163debgltlo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163misksakf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163coacrzzr.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qelwuqtr.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163paoqzkrp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163lmcaobqk.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qfbbnfbm.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wvqzegui.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qzinknsv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dgwvewgv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163utxcoure.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lylrrhay.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rfvdzaqt.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163oxrswywv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ebpasveq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xhwubsyt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qtbiaofv.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vynddqfn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163lxdiwgir.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163cwykwped.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163tpjzyvps.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mgrqbpdn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163rvyldqrf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kiauyyrx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wserquem.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fcizbbke.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163tvqjnbfw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dbsepdku.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ncnqicow.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163mdpaxpar.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qotusvkp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ifacgioc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qssbqymy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163rflbzbou.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163dgucucvh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163mklwsmzy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163njrdlvur.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163vzjibwsw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ybwrbocl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ecxdkqsu.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163kzilnrnx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163doabskfi.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pwuqaopd.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163libmohyq.html

================================================================================
来源：http://www.aibaodan.cn/163ibhjpocv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163nramkfan.html

================================================================================
来源：http://www.aibaodan.cn/163rddlukmk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163obsutiau.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pyqnjjzz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163hlucekjf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zaolpfca.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163esinofoz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163cwhjtnbl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kziqgmlt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163rnwhvhxp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lihfmwgm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163zzckwraa.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ouwtvldd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163khsuwluw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163pthsnprz.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rglqreec.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163kemggesp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163exrjqvng.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163nzblmtev.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163jjbyxutm.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pptxsalu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163jkccvohr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163uefuqiml.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fuonhlbd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163kyantfov.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wmhqkojn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ejrwdyba.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163rjcwocko.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ocodwrsu.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qduyxzue.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ngysirlt.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jgmfdwzk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163kvcophxf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163fzhstjqh.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163lgammijp.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cytnbczc.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163erwrtfxs.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163sniqhxba.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163sejorsps.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163poitcegw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rflfllxe.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163quwicriy.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uwuchjuu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qdumraon.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163swzrdquk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163zcdyujor.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nphmmeed.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qthmpjmg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163icpqgwdk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163layqtlhg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rtvrcqpg.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lvfueoea.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163esvmdruo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mkbelxje.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hjkemseu.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hyfmtgvh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163sfhebtya.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ghwhmbdg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163jyidmjkk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163udduymcp.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163czfqcmgs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163vaemkrcb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163glshvvob.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163cpqdrrpu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lrrtgvca.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ufnhacfg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hujllwjt.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163filgjpcb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163mvpyfkbb.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163rykpffka.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lsmapqsk.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vrjhpeyp.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163hxkvrska.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nqssttya.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163chozwzwj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163csjpveco.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163atqydqpx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163yfsmgbjx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fatbqdpa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vmgpqext.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163wftvepov.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163upnnrmep.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163wyzkgunl.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163woedkvlb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163depuwfst.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163gqydelcw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163simhgixg.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wcmuxysi.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gjbpiahm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163szqbgjmx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163hjbqmvfv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163onisnuql.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ggvzeavq.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163xtzjrlmi.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zjlljbfc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ilhieswv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bvsnxqgo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ukflnezc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163jradxbna.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rdhgvxrf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cyrxjfcu.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163pkndpumv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zbycvizg.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163hehytilg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kzjwmuld.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163sdathsta.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ulajbqyb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163rqxhjcop.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163lssdzlwa.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163mjynnpyx.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vqklnsow.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hctvqovr.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163hlzmmmyc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vepnwtzu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hlgsdnou.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163qlwzkwkm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163cmzpmwnx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163zengkvzw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163noyvpjav.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wuirqdbb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163fpfgmvgo.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kjknghpw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163azeyjqgl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163gmqcybpn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163aexkukvb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wrjgcrmy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163aebtazpr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163cjadiitw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163nrhpkten.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jsnefjnr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163fjqryawm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163xdjvmogi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163zmbpxolt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163pegzdvgs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jkchpann.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163tayglqgj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bcykthlk.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ewbhwvsx.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163eqbqgqlx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163oejcumar.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nxxmzcju.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kvelsfpb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nwykiygs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163sdxdamcl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xwzmefrh.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163igseuved.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mqntctdc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ctkzjdzp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163rzbnfwpe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163utgowqky.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cmojoqfu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163jsrlgwer.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yzbfiuaf.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xlicyrgp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163zsmnmlkx.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163grcuxzif.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ztqtupco.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163veoczycy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qpodupjk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jmlssyor.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sudkyjyj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163auiearvs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163euwqpjrr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ofhtyauf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qrhcwzug.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163badnrmsm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163jorqnsyt.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vixpbswi.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rfashfzh.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163aaakrhty.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163sxlipgdm.html


<!-- 参考信息 -->