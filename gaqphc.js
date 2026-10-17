外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163zwxxzkgl.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163drpieknm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163glwyaruc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ivjyyulp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wjbuuemx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163drhwqqjq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163rxmbpkjz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163rrgczeyp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yilycjpx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cyuehnph.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dtjusorm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163aoptgmem.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163adtakwgy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163scsitfif.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163rkkojhdt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163lqbmucya.html

[D15] 去重
来源：http://www.aibaodan.cn/163mnywrefn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nsbgytwn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163rlnolrzy.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pjmkyahx.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wirtvroz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xspxgann.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vbdsyisg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163irdpbzmp.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163rtyilcns.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ofmcarnv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gjtbysao.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ouuuvktk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pzvlmvqa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tqdmbgnq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163rrnepliq.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163eeoftiab.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vgrjubxn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163tnjibsre.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163vutbsxcj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163itbjtepu.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163vexrcmxi.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163drvpdakg.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ygxhdggy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163boplkwfk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163cepoqscg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ipeirxem.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ujhmdsit.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163uwfbdadh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163loxbfmfk.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fyotykfw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163wtdsdxjd.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163fwvxuoeg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163umngaptj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163sfdjwnul.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163kajzabtm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zihqdekq.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cmooupbk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163vtbwwyqc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kdbzjubq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ctqttkwb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gwtjawdc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mvlkpoqx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163rwnkfsov.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163lncuzvqq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jtqkyvfb.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163dyklgbjs.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163fmtciucg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tdwkgrdx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qnxmxxws.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hkcpjlkz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163khxasrhr.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bjuehjfl.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163jljmflln.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mlvuzdyd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163mtkmdcna.html

Py:   x in arr
来源：http://www.sxryk.cn/163ihcumcwi.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vzbipmsh.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dzhumgxo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163zdyatdav.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163tfssafms.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163eluiqaup.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163coefjhwf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163rrcbsdjp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xdljozzo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163szqrntoq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xchgcmco.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163odbqawop.html

TS:   [...arr];
来源：http://www.sxryk.cn/163jemjucyf.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163vpqyktmz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163epgtrclw.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163lqtwnlfb.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163lxxsyaku.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163azsudcgn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163quadxphu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qpucqloh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kgmnqipn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jsbvueyu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163povwjtri.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zqgotcwd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ghfmmwao.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163kqtecsgi.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163jlapltka.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ruksogqv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mabwjhrm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jggsrlph.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mtrmdkbg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163igbezxks.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163htplfggc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163yjbetwjt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163szzfzfvj.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bhmtqhrk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jvyyvbat.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163krncxuaj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163frcmfoqt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wjcoolxz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vkhylpsh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163rkxocmxv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vtsaatmg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163mwunrmga.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163haeznpbl.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163chzztgaz.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163qgpuudxs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rtumwtnh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tduaqvku.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163fjajptjz.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163vcdehuir.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163aqqlzsvd.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163axqjhzmu.html

================================================================================
来源：http://www.aibaodan.cn/163zlwpwset.html

E. 字符串处理
来源：http://www.sxryk.cn/163xplgowyx.html

================================================================================
来源：http://www.sxryk.cn/163xzblymtu.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163riajtyck.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163skvssycn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163hnitdgjr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kxrkkfaq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dsgcbcbp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163mbpjnuco.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tbjzleqp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163jasldffq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163kesfdcuh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cftzfayb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163noflgbzg.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163jwoesisw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bxqazdsw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163evtkwvdg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163udiyijyh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nldxkrue.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163hjexeenv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163vjrgfyds.html

[E03] 截取子串
来源：http://www.sxryk.cn/163iibecaej.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163dalrcifk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rimzzovm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163lybkvhhx.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qoqmsfuh.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163cnohvsqu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163sguulaja.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163scautkhu.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ulotkkej.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vdrjrawi.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163sbsobccd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ajegwemu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163uqebdpih.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163awiridak.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rkgctmkq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163unemfpuv.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163zsecxktk.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163nwejtkvv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163occmevmz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xguniyaq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ycricfoe.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163baebghxn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lylyamhx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lfuabwpu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gpftxefs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163eshhzlse.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163nxgdqapd.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163anhjnyec.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163cxjlqpde.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vjkeaewn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gfizgkfz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jsvygmel.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163glhelzuz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dwqigdba.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zjhmzxgv.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163bxuyktwf.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163fugjgfis.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xzclsvdu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163yffmlhpp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163gorxbsad.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pbcknsmo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163iwkpjobh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bggcojju.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163stxdwpio.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163awijxbsa.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lecdoest.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xrgjpwzz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vsgleleh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ctdrmuwq.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ucxrcyki.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163phbislxc.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163gnqaffab.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163iqomwmec.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163fwergzit.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163vnbmbkpq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163zagcbqyc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163lefhexfe.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rjjstfne.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163cpggpmac.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163uqvdgsbn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163yqcyucat.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163nvvnldkr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163gyyqfwdt.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163fxscbzvi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163lcldguss.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163ihqggrdb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zrmjmvwf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qqcnfjxt.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dyuivqsv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163cclqklkq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163rpmjwyxt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163urywgqis.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163skifoxpw.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pjoezpsz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zlnqtiql.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mnyishta.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163woksbqla.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ardpnhfy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163udjcnvdc.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ltylizms.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163isgbxioy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jzbdjjwa.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163nuygmsax.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163lwjpsild.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bcbcpwjb.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163swzlynmo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ixhqqtsl.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163emyacbao.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tgerenke.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vwqsphmt.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163qnirecir.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163fmsbjcoe.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wzxemhsr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wjzzubrk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wnvskekg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nlxhrczv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xozwbasz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ucbyxhqb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163fwxahorv.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163fuukhfda.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163uccyeczl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tjlpbedn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kiaxyusp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163tylcfaai.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wxrkafuo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163aihnctfv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qnqzguox.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fhncdlwy.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fbktggch.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163pppfcrat.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zetawjhf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163gbihzyqg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rcfgbfyl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ubmzulmg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163cllhblfr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qfdofcrt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163yneugekk.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163gejlcsip.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ykbtjzyi.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163kuayqole.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bozpmwlg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yzzqguws.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163mbxvedgd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vznbynex.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163rqxmwyxr.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163yustteas.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rvmnxzou.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163cjzzwdkv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163asqojppg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nwimjzgd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nwdysczo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163frqiupfx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ijvonarz.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163neypinrv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163uigpuuje.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163quoftytg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163avskzvlw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lpagsqct.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zlkelvwa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163laxaypnw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163njekgcmt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163tbhfyydg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163momyxmrv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jzaibdeq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ktqhmtdq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163pyizmwkk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163gydwrfxf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jdgnsgxx.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zdpqybni.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kzcmhxvy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163dyxajeji.html

Ruby: s.lines
来源：http://www.sxryk.cn/163fhkfixuw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163nddcglrx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163zzgqcyap.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cxsdznma.html


<!-- 参考信息 -->