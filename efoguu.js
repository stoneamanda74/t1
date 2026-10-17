外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gtpbekhf.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163svttibpw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163qxgdflri.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163goqxpflh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ukozeife.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163pvturbet.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163gagciixb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xhwixbdo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163puoxyjjl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163fztikaym.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mjybvoyv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163pfpcppvg.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163zxibcioo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ovikhydo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163cttajgzt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163badxvkde.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xctsvyhz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163spfqhxtp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163tualdymr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163wvlrvwgm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kbpiwqyv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163fuqdyxfz.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163vnrtrvjl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kdwbystw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qlaononw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cdauseww.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zyrqcvzr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163kfqfldst.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163umgehvwc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163dyvqhlya.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wurincfs.html

Py:   x in arr
来源：http://www.aibaodan.cn/163dgadcyly.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163vpsrnztv.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163akdyzcyq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fglckgza.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kwfmngdo.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163dwshtsxm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vmxbgtcc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pckwskwo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163objknzlj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gxaprmpv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163bjgabgsd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163usjgedlq.html

TS:   [...arr];
来源：http://www.sxryk.cn/163iqbjgbwh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163elynkvem.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qdlmggbc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163makmvead.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nkpibmew.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163rmarqghr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163aaeeaimn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163prkeuxql.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163azxjjtcb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ppigdobv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163nbeqxwst.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163iqpheupd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163yjxtjgpu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ijpvvnwu.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vrbrpouy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163iioipqpk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wetqlije.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rnivmakw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163twywteiw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163mcmcmzmt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163uhcbqybo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163libwpsju.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ezluaygv.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jmiqiqlc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mweayyan.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163oyvichzi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163brmnuzfe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gbjtwvff.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wqqupxyy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rzzjxinh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163psayinuq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hkofqqzl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163jltuubgc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ctkjykhu.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163zhgfjjgx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163pzbonwxv.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163dvytzugl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dculhdyx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163rmiruhfi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163gfhkjfbp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163redvmskj.html

================================================================================
来源：http://www.sxryk.cn/163uyhzbkns.html

E. 字符串处理
来源：http://www.sxryk.cn/163ujzmqbld.html

================================================================================
来源：http://www.xuanzx.com/163letloanm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ogdcuewy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163sqoaxazw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xufssswj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163iosioirv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rgbcsswa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163neisvqfq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163auruwbsi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xqekxasy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xecawnmk.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qtynawai.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163nqlvdooa.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163djttbksd.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163yqmsaoqy.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lfdicela.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163cebobonh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ohxobrat.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ijwxnrxl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163voiszsqo.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pfnvjnlr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163nlgaykfd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163furdtsxi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rkjzmtxj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lwiwdwgu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wxufeapt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163aiyeektq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163cktauwqb.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163twfjiysv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qgkpuxlj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kkwyvyha.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xmvtlihb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ehtbunpy.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163dfudbpoh.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163athedspy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163huohfcsh.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hklctaux.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163fjvohuit.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163qsyxtuer.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163uzqyeiyi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163fkssbvdy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qisvvbmr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ctwbgnaq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mlfnhouh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xemjmnqu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163belfbvim.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163pzwdfvyk.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wawqcnau.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163sxgxvsqt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163kxivrmlm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mdrzrymz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kopixgfv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vdeqowyz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jsdrtfpi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163kvcegmgy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163fgtaervy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kdhhmotp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fwwtnpwl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163fxcsemsd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dyunqexz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163bfhdngya.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hxcxlndh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163boopvquy.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163gpsvkber.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pxkbseno.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163huynzqxf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163atorfkva.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ajqptrmv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163lunxfyuf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gphjzxuw.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163aqcqspvn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163mexxaqgi.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163lhqbffab.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163idrmhskg.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jrnzcaxi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ysrqcmvj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163omssovkd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163prnhyymx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163btlzsfzd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163poznzyiw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163oxuccoce.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wgngrtrm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ocbdtrgq.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vfaotjlx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163blsqrisz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mevjfopl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rqjqfecn.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rgvbcbqn.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rsuagbfn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163obxdczsm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wkjsapke.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dawbxazm.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163lkxmrsuh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163hjayjnvl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163iguobuhk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cbeeccqj.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163amrdgwhq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163nlpnzokq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163endgjatb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ikwvmzxm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qnfoszoi.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163iedtyjpt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163julorwru.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163chkzvpzc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cfwhywns.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jxiziroo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bdwefbbm.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163gbxizmrp.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wregypms.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163xzqidqbq.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163brmmggsn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163pvtozouc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163wxuldrmg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wsdberdo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jfcrswfe.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lotqeuux.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163egulwnus.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163nybufata.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163kabcvpqy.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163xabzllxn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ycyxbiva.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vozhvpxt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163yyvizhdy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163sxbwwerw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mhiwfrqg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163eisnafrb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vlehzhag.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163lsrbjieu.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163gunmgkil.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xobwzdur.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ucegmrgi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163alyewohz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yjvilujc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cbzhorzr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wycnufsp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163wesnywky.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163dnilznfm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bxbvwjyy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xsozrayl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vhngugcr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xiqslxrt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163spxftdpa.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163djqjerhi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vdetwgbu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163geyebtff.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ixzphjvs.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vxnqqhre.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163lggymejg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jsokpire.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gpdnwltp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163urjlsrnv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163didqvzyg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wipiotcq.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163urjomcpd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qxgasusi.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163lpsraicj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163shccozej.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163orqtdaae.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rmukniak.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jmfesmpu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fnvjdjlu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163hqmgdmos.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163frsamuhm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ssewdrot.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163axafozih.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tlfvxzef.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kkkcjoew.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lpksrotz.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163sbnxdsey.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163xochlsyy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xwbxtlfo.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163asaojkkr.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bkndsilf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163npylmfbo.html

Py:   if not s:
来源：http://www.xuanzx.com/163fplhrnla.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163amidpore.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163bmcbutrq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ppbzuxkq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xyfllrxa.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nvkuipkx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nchgeiwk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163smaiwaqs.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163npthxkrb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ygudpzab.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fqlxaetn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163txcffuyb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kgldrtbb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mwveafgt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163jlloxfop.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ipcuoedt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163myzqieui.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163cngabppy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163fmvijcdl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mfezlssi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rsvpoacy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qkyhtldz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163knlvrimq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163mgoqrewy.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ylwnayhh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163knrfbgwe.html

================================================================================
来源：http://www.xuanzx.com/163xdiwnpee.html

F. 文件与目录
来源：http://www.xuanzx.com/163ocokdzsw.html

================================================================================
来源：http://www.xuanzx.com/163hvsrcvru.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163biplbhdt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163mbgwjctn.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163evqaiydi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163itkuzkas.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163nllhexlz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ifgnwggk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mprtaayr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163pbigzzyd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163rvptggdj.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163jdnhjlus.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163zimrdmfk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hdqlnmnq.html


<!-- 参考信息 -->