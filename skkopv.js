外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pvyiaqga.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163bsmcxbum.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gzcorlet.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163memewczj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163usrxlodc.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163eguphfvw.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qglqdaen.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ytlhxili.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sxwrxnrs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bwruphky.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163dppnsknk.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ajanqgxa.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163wxbhmylx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ohtqnexk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xhvqknol.html

Py:   x in arr
来源：http://www.sxryk.cn/163yzojswbr.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wzbldaji.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163cvwwlqti.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pbfeprkl.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dixjktgc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ryntejci.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163cqmszaqw.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163awwucjvw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ebhhmlzl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tnchabqg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nvboppze.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163iokuxwlq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rpsuxzbb.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163vkkmvsxa.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mnwjxsjs.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163xoahqauz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163waekwcsd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uzhrbcgr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163lljcyyqc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cwgmkltf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kkbobump.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163novwgelz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gtsbuxgd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xoklsvsy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jpcbevpf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163wdsgvryl.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163smhrpwfn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163merrgsxa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ddmlqbsr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163drdjukfg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rmwitzwq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vbjpqfdl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gxappwnt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163eiksqhwl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163waavvjlt.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xhqwzdqe.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ormukkpd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163shkxrgsy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163fhhfzvpp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163taoastyh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163dwwzkeeq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lpkcjmfd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hxvrznqe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mbjkgdoh.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163pejetivd.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163tbblyntx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lhkoyitp.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163noahcqjj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163yfkzbool.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163dofyulzc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163fwmitsqn.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163iivftkah.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163nqyreedw.html

================================================================================
来源：http://www.xuanzx.com/163mexvsqxr.html

E. 字符串处理
来源：http://www.sxryk.cn/163hbnehclv.html

================================================================================
来源：http://www.sxryk.cn/163xiqrcbck.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vowpibxf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163udavsdlv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qldgwrtm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qlhjquys.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nvvqfbqh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163kbhhmtyh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kfnyhxjz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cveqkimo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163zjvejbyy.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163sdmzflwr.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ivkuhssx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163yiqazaup.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qpdpjmdd.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jfnrkymz.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rlhbwxsz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163uaqzfcwg.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ripoqcyt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163cvbmjvmb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163fppkaycb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163mbvearfi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ripsqkts.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163lskibclv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ceszecns.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163pjakfert.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163iarqdiri.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ihcjhwat.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163acrasoao.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163dgoyrlpp.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163tperzbod.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qiqkhllg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qsorxdhg.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kbzchobu.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163aafgtqyu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xehnnfgc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163gbdkaswe.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dhqgsrec.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163agvnlzih.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ozofvarp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163lqtlsjhu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163basznlmt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ykzsvtwn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163maizkeku.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wxohjexp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163txrzhasi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163xpujtifi.html

[E06] 替换子串
来源：http://www.sxryk.cn/163sfecdpfb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163zbbssery.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163itkvuenq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vomptfsd.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ppruydfj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vmywrsci.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gjwboyzg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wlnrcrki.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163smejybps.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163opstkvze.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163qvgcukra.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163suanwkxx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163rhpenavo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163jtulhpcn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wsapzwyy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163bmzozqyj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163gcefptqf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163qllztzfh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163rhyuoawg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163puujridm.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ymcbuuao.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fadwcpry.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163aakhixwn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163phspqeky.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dibyuhyf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163bivpzvze.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qxiobrrb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163ygoalhpq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163glkcflbb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nfhwrkrv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vijvcwhz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lvsvnepf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163gkjtvxnn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163etynuxol.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163gwktscxp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163tthrxjzr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163xniwrcsr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gsbitisl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163dekuaoqv.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163grinjixf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hgjzztid.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163dkrdjysv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ajdcfctx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ivxubiec.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kpfikzix.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163qyoyhmuy.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163lxefhyar.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163hvryfxpa.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nbtphfxx.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sphzlgxi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163laaeawcf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gclxvary.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163fhzkvzzs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qzqmqqcc.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163bibhncem.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xslgffbr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ppwmenda.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wqinthfm.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fpzcauxd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163actldtmr.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163gxtkpewp.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163gzjndpzz.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163uscbadkv.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163yzmdcspo.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163yighvqts.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ehncetqv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163itpwlllu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xpbegjky.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vvmfvpco.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zfkxuxmp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163tjsrqnpq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163mgbxlixl.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163qcxmkpbe.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163hiwhrdyc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163wwkfveku.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vxupwxka.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xjmpysxo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vlvywonw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163iynwkevq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qaayshnx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163sqknabnu.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163bsblvyxl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163szgkoyfo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vralhart.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163dtgnxldh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163dmtgamre.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163acnoerpb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163yjtrsbik.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163yayimlqh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163gfmmcorg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163uccbygvf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163utknrjuw.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163xxclkzgb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nixneqnz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sbylpqzo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163pgdteamy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163qcvueuzy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xzestiuq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163johqnrfl.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163biyzjglt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163hunubpdv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ukajrzgw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bkbiaiib.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bybvoggy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ikcimmfe.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163pvvpmuyn.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wdtdewvt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163kdpmsvei.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sxuwoplv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163gaowvdtx.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hcxpraex.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163udcfaxee.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vjkxmydf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zurniiat.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163lpwdzsqy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163eftbmihf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gflompvy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163tdbtnmik.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163zsrynkgs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163urpsjsmt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ubpofznh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ncuylcqu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ekpvghzc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163pleefzmd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163gygagerv.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hkwfrqqp.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rqpjxqcc.html

Py:   if not s:
来源：http://www.sxryk.cn/163ujhmqdsq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ucsxsyqu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163cmkgplyq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wdsgtsgv.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qjgursyl.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163yxsajpwv.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xxzawkmo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163aqyavhsf.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163sbgttkgm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vcgkzxcc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163okvowqha.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zxanpbvx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mpdbuqnj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163toznvbcf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163cxbduhdv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163tscgugrw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kbkjgwrq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163kmgrvaem.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163waketqeh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ficoenke.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163coifkbzq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rykuhzmb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163fjphzqrs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163nrtysvpu.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ekcqhpkk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ngbtsoip.html

================================================================================
来源：http://www.aibaodan.cn/163urexcmul.html

F. 文件与目录
来源：http://www.sxryk.cn/163kvudvkqr.html

================================================================================
来源：http://www.sxryk.cn/163nyljkhdv.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163omjoxjij.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ilhtcrno.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163drsxukdn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sehkvnbh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dpaydlch.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ynthoqgm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nzbnfktr.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mhitihbg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163pigmpuyl.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163rnffzsnl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163aynntcez.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rqhqjdbl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uxqvmwlq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ksfrukfl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163goiufzsl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163etijlfmf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lxyfexmx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163czbphmha.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163aigqzgcd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163lgkijgxh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jtuqaqus.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vbmnduqw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vmagxxvu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163cdoenmnq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163srldghtc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ngaaxtfj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fakzxvnf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dfeeilbo.html


<!-- 参考信息 -->