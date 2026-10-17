外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mrpbqdni.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163eilvrncq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cbthcrdv.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163scwuvfco.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fexaydie.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163aeufjnih.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163whfezzkv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zvwtdslm.html

[D15] 去重
来源：http://www.aibaodan.cn/163ymrdfiml.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jxivxqcf.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ozjszgwy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iiwwvvkd.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yrkdqebn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163evjownyp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163xiaxlkxo.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163bfwrvlvq.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kltqjbgs.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163hnwdlclv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163fmhshybg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jpzumujo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163unjfadhv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cdnpmftl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163twhgpjsv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163beevudvv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xwjkljpq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163zxiaital.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163itffypjp.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163dyruxmhv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163npyacprt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rgjwqmwr.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163cnysgpbz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163maqorixl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vtbrvngr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163rppfwosn.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hlwhodgs.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163sztlltvp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wgbmpxuv.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163dkfkohwt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163fbajisat.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163lpjypcnd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163fhudlvtt.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163umbqoabe.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xpaistol.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163fopzoien.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qohnifaj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163erufheai.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163fxtoowac.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163hjethutc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kctkevvi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163zxnmtomq.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wbytbfgs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fagjqleo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lncnocju.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163hmwynhdn.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ynkeuixj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163wmzzavyy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gbaynhkg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gwyqeovq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163aosczxkh.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163wqmevtnp.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163momsuhsw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ylwuhtzp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fodmxmdp.html

Py:   x in arr
来源：http://www.xuanzx.com/163ogtoalxx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xyoeiaxq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rsepqxhy.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163daldriqt.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zobrwsrx.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163dhwmihjq.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163lrilinlc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163qsnkhsow.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163aauswdxm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hnsffvvu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163aiycstlv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cyvovwnq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ivutarwl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qszsmrlw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163docnyexa.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163eqxugkwz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163saicrpeb.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163iijiyrli.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ntgkhoky.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163uqdyotdk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163oozhaidn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ufqlwfmw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163mzgsjfuj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163szvznaok.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163mdlavnxg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fycuvfsf.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zicbiehn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163deanipat.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qupkpcts.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163eqhnnfat.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163lqfspwaj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163iikhclqa.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xezpsgsc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163kadhbclq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163eisfvpvn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163dslshudv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xdqanifd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qephzkta.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cfsbdyfc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163czpfwwpe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163rqupdces.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163psrqxrya.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163prjiovug.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nyrsanac.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163jitojetw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163qcnhlhza.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qoczoyvs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gkgmpwaz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tmcoqitd.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163erizdcdr.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163afshhwhh.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163sihqszcp.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rgyrqckp.html

================================================================================
来源：http://www.sxryk.cn/163tkivnzds.html

E. 字符串处理
来源：http://www.sxryk.cn/163efwnymyp.html

================================================================================
来源：http://www.aibaodan.cn/163uvuipwtg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ffuvqrze.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wuzrjzdo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163lsyyiltp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tslctgbo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gnincpaa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cvdwqctw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163xkcoojww.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jbqlxijk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163rrpllitj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163pcsxmbyt.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163mgruwqrt.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mjnbooxo.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gnzebcse.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mhjaqekx.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163knurmcet.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163plrfxjyl.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vawyloyg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163gpuzfafh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ffldoibr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ycyinxpt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163gnyzamox.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wllwnmuf.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hqhyumfa.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163syeiwoel.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163dyxasbyl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163cwugiowv.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163kfjwokgm.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163onbrkagl.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163gjwwcosh.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163yorzwajk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jlvuiawp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163csksnusj.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163edjqlwrm.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rowczclh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163yafcmspg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163gokbkvoy.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163xdqylxmh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163oyfvznwl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163tabnqydj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163scctemsd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zjfnnugp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163psegrbzw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163bltwxyng.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mdhvppvn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163aqwpcrpy.html

[E06] 替换子串
来源：http://www.xuanzx.com/163foexatua.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163glsthifo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ebwjleiy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dusxgppa.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dcjfxhlp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ntqvfqiu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163oxluhcfi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163vlqjmbgs.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163itzjdvqu.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163clupsmis.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163pvkmwgoy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163oulfmqyh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163tsnlshbd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wylkbgzr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163xnwbswfa.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jfaddwrn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163adruyqqa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ztouhkpb.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163sfakzvvk.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163urilexte.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163yugccopl.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ffarlbhp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163amkmirow.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163jgmwznue.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163jtosdjuk.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163slmxidci.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163glgiccet.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163drbnsxbm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nfpisuhw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vuqugxhl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dmyvjbmm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163uckhiigs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163hzzmamtt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163xntryjjo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nagvrctm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vinkbzxh.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ysxripnd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kjivyoui.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tivfuhqm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kyhxhurf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163teyzhnyt.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163oahtyegq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163uitafjux.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xhbyhgqg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fgmkdprg.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163xqwchpwo.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wxxkpaux.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ckjquuej.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nfyhstyc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ximctppi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163msglxuiv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163dowwjkdi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lxowmuca.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hsxbifxh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163eeznuvzb.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hkiwozhq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163kdsnxhhe.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wqekfgzx.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vgecponn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163wmjkgzjr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163jtmpthqx.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wvwazphd.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rmuwqqiv.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163brjrqhyy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163cmvxrdrf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163teaqgdjo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bhmcfcex.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163oxvjsgzo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lmotijsa.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163motxvaqy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163rnccxhhs.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ntnkekib.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ktcwnivi.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mwtluwbr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163bkgstwrt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163kzsmcjdw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163wyydujtw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163icmkooyi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163cifwxqty.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jvhuydwf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163xkgyhwic.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163lkeewjga.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163koyuoqax.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vjvnwhes.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163zwctpafx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ivzqnciz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wnriwdwp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jhkxevxt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kdegohac.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163lfmrwnks.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163uhjvbmlw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wrkdzlei.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163isxksasf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nvpecekm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fcdeotvg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163pvjjqlyy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xniwejmi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163sozymazt.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rphqzbga.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163fszqagwl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163zgmvxlzu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163psybitdu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tknxvelg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wqsqvlji.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gsomqleg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163kldwagbw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jyicstcr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163iyeazvat.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163eqiybplc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qjhueffh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jxupievy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jpvcngon.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zgpvfnqx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163eextaofj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163yojutrkh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163bvderkeq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163imrprxyv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163suzavwkx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163qapsjoun.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163spwiqjlh.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163aqrbxfag.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163izgiafay.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163fppsefrx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163obfzxsuu.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163kqostxjs.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163sjcdbvqc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163pzjfchab.html

Py:   if not s:
来源：http://www.xuanzx.com/163qjszeezh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kjwhgxhb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163jnowksgi.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163jelhfewi.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ftqpibku.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zlewssww.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163eutcshbt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vpslrdte.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163jbrvllwh.html


<!-- 参考信息 -->