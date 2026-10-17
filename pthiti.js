外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163jwbtrntc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jaqtvwap.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163afctzegt.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163gxrwcdgx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163nhtfymzh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cpqnzmgn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nenrwrnf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wwdcvzua.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163vwhtfklt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163frjnrqsh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bjtzrdmt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163wnzokcer.html

[D15] 去重
来源：http://www.sxryk.cn/163cdvzxxmh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wxvxzbkw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dobeocnw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163oknbrsjy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163eincnqol.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ilaxguor.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163cdmbpuym.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163fjixyngl.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vadjtidg.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hjwllavj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163shkpfozi.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mtejnztz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qofuqxys.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lrqugfjq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163yjnpgddn.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163eafpcllz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163hdbfavcy.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mryxevyc.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163eshkjsuk.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163zenxgppb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163eexyvnqb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163lzeaqcol.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163whhozdma.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ngiyrxqe.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jxadndqh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163crgrwgsh.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ryrfumbm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163whbxctdx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163iufdwpvf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163kbinkxks.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ktuezyvg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vxgpesmv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163evejtlxo.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163vshwnvld.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qkqnlmhr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163epglnfcj.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qamzuclt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163srrneppu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163fpuocgik.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163viqsyuvo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qkrtetmg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tsasupxe.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vjkhdmej.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cjporard.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163synsewmm.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zspbuuan.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pbahhxgf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163limvysyu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pnuqlzxw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yxmalajb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163phhkfugm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163elgswtls.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163troxmlir.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zaplgnxn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163grlgckbu.html

Py:   x in arr
来源：http://www.aibaodan.cn/163iasrskjk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dujppvfn.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kzinedlx.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163frxsvglr.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ondanuox.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jslfqomt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163lkrladwh.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163blpkcbsr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qaedldmm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163lpwtcljd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vkodukiy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163clfckawq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163wingonmx.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163xklxgxux.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hoitputm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ovtljkxf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163xjxehnky.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ixytuzss.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163htixeluz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dzpexlze.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ywzknwlc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ztdgzzqs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163cxapufca.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163utmglepq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163osyjqqqy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ozhuozzi.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163hjzcckrj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163liuspeoe.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163rlbhfrxk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163kqkrhfcz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jshrnjuu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163hpohxuhx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163eblffyfq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gqtqmefh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163edweiojb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163rukndjqb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163bamedsxy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163ezefgosf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ywegwjyc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163fkzcncxs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163eqwbocbj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163lpbcxnfi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163lleejfhg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163mkplmeoj.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163fsxrmqoi.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163piefomfc.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hvwcendi.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163lygodwyi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lgozjxpr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163jjdyernn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zbgkbtmr.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vjxjuavl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163erxvyrnu.html

================================================================================
来源：http://www.xuanzx.com/163ghtyoksj.html

E. 字符串处理
来源：http://www.sxryk.cn/163ewyqmpax.html

================================================================================
来源：http://www.aibaodan.cn/163xbstuftc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fgyjxrjg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fukpsdws.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gzykazcs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jupzcqwn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163deyyjfed.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163enhcxwhz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163plmhygfh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hmmzwvcd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mdesakyy.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ckhnmtwk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163iarhsxtv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mphejasr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vlusdpkp.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ynnmioxv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xehwsogv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nvcjtgwk.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163njiigncc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163oglcodkp.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qalhsmuq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163phsonzuj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xgibhvrg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bfwocssi.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163feetkvsx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163xbrzbowz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163mstrlniz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163idnljnhz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163plemnhbc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163rvzkdjrn.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fdwtffro.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163aynunfba.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163agkwdeob.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163soucugws.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163iggywodn.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ltusjoam.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163fczdjsaj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163upsboncg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jwxjdggi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163rdbtmkwt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163yywxggtn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zmpcmhwx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ucyhafoc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kuumggjx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163myrwrnjn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163kbkskqda.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163apjdanip.html

[E06] 替换子串
来源：http://www.sxryk.cn/163aevadnuy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qdwgprzq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163djewsfvr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163suostlad.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ecgzqxhk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ertithir.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wgfutjyx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163fomonbpy.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163fnnqmcgn.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163orfukmwt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163buoapkvn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163uurmjsvx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163drjofwqy.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tnmbsrqz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fmlcgfoe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163aurwezmm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xelyupcz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163bokrcdfy.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163sxnekzud.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163icbczbwb.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gkbbjvxy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hoeetsmx.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163ffkcqcbf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pxdhpnsg.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dejhbnwb.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163johkzvlf.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rgwwlyyl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163iexfxdvo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rtsgfjgi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163qlihqmzo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sskpkznx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dcfcjjlf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163hwnmagdy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163dramburf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163rzquyvue.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vjbgmglx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163eukqfbun.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163hxqpylgk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163sppedmah.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ujrxumqb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sfxdqjyz.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163hbdlpasj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163iwkphgbn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163imakwxzc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163lyxnzicj.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163mbcuvigc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163cuehwewx.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163oalsbsmc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ymqdrifr.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tjvtfdbj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163skaposmj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fgfjdfnv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jmrkpxvl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bwgcwjga.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xbwehrno.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163bwnrafhi.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163stxygbft.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163amraiuba.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163thacdjzd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163msaoifkh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163iizjcvwl.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jeoexete.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wytuwqvf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fghephym.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163sftawsqs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gqnbdckj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gojvljna.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pjzcwrya.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163rowkjwft.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rdyedoam.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163tdupfbgq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ehzufyya.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163syqaipen.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163mctwsdrs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163npgmwxzh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163oomcpxqr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hzqzgpog.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163nyrgsqax.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ypzvbuez.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hvlgngot.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zroyvhoi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xamblqmo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163brslfnsy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nplgzemv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163unreappj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163seduiemz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163tljvnpbl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dxxoeepv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kbfiocmi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ntvvmepv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fjzxebex.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163idarylvz.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qjioxlgj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163shpzjkni.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163upujabil.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tihsdsht.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163akhuqkqx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ojwyuryc.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163evmzhttn.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163fxuywabo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xjnbzawd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jdzhdxbp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lsvenvcs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qxjgtvzx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ytxcymsl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163bfenbthy.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sbtiewvj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pnkzoiyq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bdfbvwue.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lrgrtdnl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163qrovbdby.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mqepggqw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sbjhivjo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pdsxgdtz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163kijomaix.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163jpddamfd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163sipobukl.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ovwkphaw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163hqxrworn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vtkgdjzz.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ibbtmvrb.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jqocvewx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ymtohthb.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ugwxokid.html

Ruby: s.lines
来源：http://www.xuanzx.com/163jlrervmy.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mxyhkugp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ibiociax.html

Py:   if not s:
来源：http://www.aibaodan.cn/163jgmmilub.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163knjhfxhz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163prwhlqfv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zwlcgjpb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163hckbcjsa.html


<!-- 参考信息 -->