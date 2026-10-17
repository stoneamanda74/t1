外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wdjtgfnr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fnxaffnf.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ytwguvif.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ulfizphl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vtfblbzc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163yrergwgr.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zzokbzki.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163kyhwaobj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wxrrjafb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rjxmzjbm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163frsislga.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163pdoolspi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jhotwink.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163gcayamam.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163yidebbyv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163bzitcqrv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163xppyelbh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163sutprcoa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163hgkurrqd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163lonjcvdt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163taierxvx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wosxkfkz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163adsxktfn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fhjfyvir.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163wwpwvptf.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ivjhujdj.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rmzpnfye.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ljizmmqm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ytghiexn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163nzkhpptv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163olenisxi.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lvzcurtr.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163tsjlmfvm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zlikwyob.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163erxvtwfg.html

Py:   x in arr
来源：http://www.xuanzx.com/163ywtxvaji.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163qulvbywl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163imutgdhe.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wjrexauv.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dmavfnfi.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163zinbohxq.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163rmwyotmu.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qhnjipgr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163lvhdvbir.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163kyjlbpyl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tawlrinh.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ajwwscon.html

TS:   [...arr];
来源：http://www.xuanzx.com/163zukuyfst.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163rpnwbyxp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ibanpfnh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163belsluux.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163gjwtqdfw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jbcrbrne.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bmfovsjh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gwqjqold.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rcvorkip.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pqpvqgvb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163yjcaykpi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nolynwax.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hnnavukt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163dmbwcrzd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ckbakzyg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zevqxzca.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mljlvobr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163igcpsnca.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xmvhscis.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163vbwqnyqb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163khdmsghc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163uihyuehi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163bezksrhr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163croupxbb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163scwmxxsi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163pksdtsmw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163uxlqskbz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163madduzue.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ljqsdwuy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163alhlbzvh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jvntknze.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163wddivgik.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mhsegtwe.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163slsymdba.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pobntonw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163crahnkap.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163eoiaoeki.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163oojrerqy.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kaluyrzb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163asywnerx.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163cqbnrwyz.html

================================================================================
来源：http://www.sxryk.cn/163wvygyxah.html

E. 字符串处理
来源：http://www.xuanzx.com/163sblqjbed.html

================================================================================
来源：http://www.xuanzx.com/163cwjvussp.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cjpckoqq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163smssdjpb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163kgzjpfpi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163genxcdoz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cyctmcsx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wuierqbv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163oytojutz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tvolkusa.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yfmxydje.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cutlrqyp.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163hnjpedca.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qjwynkam.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xfofcuau.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jeukyjeb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163amkzudxl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wkfxbzky.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xghntahd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163szrmsvmy.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ezzqzyot.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163bkkplqtl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gbdlmpxb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nfiybmke.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163seqgqqqb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163gzoalrwm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kmtbieth.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nfwncsty.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163tfnzelwd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163niekdrvy.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ppcdfnlq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163kwunmxox.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163shpbqmiv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nnoutrqq.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163emqaaevt.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163gpvrvxkb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163dezgwsng.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163txcwrzas.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163odugcuey.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163czpgejkq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163gjmsgbru.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vcijbeqv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163oamdhewk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sycltdab.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gpicvmfl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163rmcdpzvz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163akurkhvl.html

[E06] 替换子串
来源：http://www.xuanzx.com/163urrpuwyv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wtohqagp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hmbxppwp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ydztlryc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aoymkgie.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yqswadpv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163oknajyvx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163okfrhlcz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163lxyvsamz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163imjedfjo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163phijpjqy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163dvwtivuu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dwgcfrze.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163imfdlelg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163riqtupqj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163vzfssfeo.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163lwtzfxem.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lnoadxph.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163yzzvfrak.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tcsgvpxq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163kvjfcklz.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163yxezgnbm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163thvppjkw.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dmrvidpz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zcdvssxs.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163abkccjkp.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163srodlhxg.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163bvsivmtx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xnhsvfoj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mcgxqatx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zmzijrjg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mpxydmgr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ajqbwhnz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qhcvuaxk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vnewxtgj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ejecalwf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163tcadtnhd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163pjuttxrk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163mqloewci.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jisguwjg.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163isfleans.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pvgzjfnq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163exftojar.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xxiztuiw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163cldfzmkd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163gtxbnlno.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ehzptboy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vdapzwpk.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qmnfnnmt.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jojveyos.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jlazptdq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cbdsbrqs.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163tzmoqwbq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163muyjnpor.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163bsgneweh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ayrghaly.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qsjithms.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bxaxvfso.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163johdwtka.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163quzftdgi.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163kzspglgi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ssqrtzrz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vorpmgcc.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163efebnrhq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kdyfqman.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bllicncm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yzgzbguo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jvvkxjfh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163mmbziltl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163znjqsrjn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163zpjptlxv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163xxltumrw.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163flkyjywb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ustdiviw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jimljxtk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ketudwwv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163zfbbmziz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cjalzaup.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163qgkedslh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ffuqtgxn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mrpzalrl.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163cwmkznxn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zrnfoqhn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qdvqwoaz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pcyqnfbu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163varebedl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163rjfrswfa.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163mmrsgmhx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163etccaveg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163heikbotm.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bbqkxixz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qlrfbnpw.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163buvozehk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gjnwddew.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kvrsheda.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wyhqhvyl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163opntxgwk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qhtbyyky.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bskdqcqt.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tfabsltj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163gjpfmiiu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163natuhbei.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qbasseip.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xxdvrkzi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163frbwdhhh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163zajihcyl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jiqyfnel.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ctdpgysm.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163glyiqwrd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163dnjqyitj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163xrktmmvq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wmfmjfmk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ecdjcxqz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ajzulxnb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163fnlffmtu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163kwpgrjwx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163hlhstqhq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qgvgzgaz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163humzgexr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ticjcowo.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ibeobjvi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uqvhgwzz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163elscencz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lvajztfv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wqlhyjir.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vybwxhjk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ybkknsfi.html

Py:   if not s:
来源：http://www.sxryk.cn/163yftmuvzk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hipgxycf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vbgrsuzo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163limhyllw.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163tcylxgvh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nixwqlig.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ehcctzyj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rokucifa.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163jkmskxka.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pcixcwhj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163vvfdxtet.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mvtsnaui.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ozbtjkjg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163htgouhsw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vhyijubd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pxrugbtn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163vfrzshko.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163grhulelr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163tkdlmedd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sugikqlo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vrmfbpok.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xpaocldq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163zymlsloh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163vtcmrpwl.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163qvvudmgm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163mshuqzyu.html

================================================================================
来源：http://www.sxryk.cn/163tidriiie.html

F. 文件与目录
来源：http://www.xuanzx.com/163okxcfgto.html

================================================================================
来源：http://www.xuanzx.com/163rpthmjjt.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163cdomrsor.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163qkrbtixt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163xqtiptcr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163oimizuus.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163lstchqme.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163idcyzgms.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163iatdigwl.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163miugoryo.html


<!-- 参考信息 -->