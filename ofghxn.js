外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xklsyifz.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yfrbostr.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tadbbraq.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vuthzdhu.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163dsjdeine.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163sgsgovnz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163wwuvtsfw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tbsdfywf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163cvaytdsw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163lbcnzycv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163smnsdyly.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163prntzozm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163movqxkfn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163uzpdagqj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ovgmocnj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yulqjepx.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163phqaiidp.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163yomgrwbg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gyvlucuh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163icgvkgon.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163sawaavxf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163cyvgnbxu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rjzcuiqp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163mtrmkxyr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163htsfekua.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hupatbhx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163iqyfgbpz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ewpocerc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163krwlcmei.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163osenwise.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rtihqhqb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163dljvioqz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wgomcfgm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wnrhdwox.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163eiycrqap.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vidusryr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163mdkhylqu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vdrzqqml.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vlygwszf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163lqqojtow.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163nsjexetr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163dvizsdpk.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qpyeqnhe.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163juauekna.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163fdxijwlk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163jnstdpyb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163pbexadxq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163cugcdabc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163irplukip.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dixmrvdz.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163pyxorjuo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gixfhqta.html

================================================================================
来源：http://www.xuanzx.com/163xcdoxvce.html

E. 字符串处理
来源：http://www.xuanzx.com/163njpitbnp.html

================================================================================
来源：http://www.aibaodan.cn/163ephmeqez.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zvoqnbuj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163jtgepkvm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ktsvgmxe.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ynnkgihg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vmsoqrfp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163aicohilg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163aedvwyko.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163yqmzmmer.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fsvsabej.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hchvukzx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163rloofenr.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ivyqehdq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163yrovnzhv.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qeyttkoj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ppositfm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zqvzrmbt.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hinyzcgv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163fhahzuwn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kaurjtwe.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163oizlkcol.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uwmgcoed.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163qjtkygnb.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ilmumnpd.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ufjvpdfm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163tgsdnldc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jegsybhn.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pintvfam.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163rzmrwgyb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163irqtttwe.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163zupaadub.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wgqtxscd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qyfhvdst.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163siwrecvw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lidovuvj.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163aqtddqhd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163qpokbkfl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163lddwdrrb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163lczhqkax.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163uoxwzanc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kobnlznl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163pnsnwkcg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fazbdtmc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xfazflal.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163pdxbdppj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163iqbrwmoj.html

[E06] 替换子串
来源：http://www.sxryk.cn/163pjpgkpic.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vinolohx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163yatkuxcb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ltmxliqy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163leifdomn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jfasnnnr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xegngaaj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163hnqptjpx.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gaabrhep.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163mxuosser.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163dhyzdzuw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163fdxuvhyu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163pmgsfnxh.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jrcpgmfr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ehkbysxs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wzeketfe.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vtqrfqcu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163fwqcoink.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163veyjbgha.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hhtaypjh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163msqgkqbg.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ypzolhux.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163fhylfucn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163kzbgdppo.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163eqlmvdng.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163rpdbbjod.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rhdewzbm.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163bwcdsxdi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163vrjchvls.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wmesmcnk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vcpfmhkd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163igrfjtia.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ucxuzvzq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ppxzzrup.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163mhwfbxvt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ibwrebsp.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163thzorwcw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ddqjxslj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zuhbgwoa.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cqxroyrl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dsiadivq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qvtuevzw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vavlvqve.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ntgmflfy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ooolgama.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163mgatjdni.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163lbtqoodt.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163fjxcntuc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kkwhoajt.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kuztcydl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163puyekmvf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163iemddemi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qxkloyjj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vspkflib.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ogjnnbbs.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163byqhhjar.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163myjifkxz.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ciasabrg.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163eyeyfbuk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163reeybsln.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qfqgjeye.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163qakjakbn.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163bdreqwey.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163veashfkp.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jwcblbyb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ynzdtscy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163nsptowfn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dvrcjsim.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163gfbpkavg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ovxxoigv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rdzjlkyu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163kibmlnng.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mpufcjpw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163buxlrvcu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163wqqqyobc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vshwiwcu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163oxteadio.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kjriwknu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fcxwfrjj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163utdjxzuj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zihzgcyv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ynjfarkm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163eoamkxhx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163dvemizbc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hwpiiuww.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pwfvorkt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ulsitexy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163raymphle.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qsdrccwp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163qaihlxdd.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zqtihdnd.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163igjqcppw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jypjeqkm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163nsnmcoos.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tyhgvrwm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163lhchysfe.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ydjuthdk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ovwipolt.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163lqcjbvqg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163hrmrplxc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pouxsnof.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163avgbcbqs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zfdqljmu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gjcssnzv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163hjyfmzbu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ggaotksu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163msijvuar.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pkbxkkpi.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163edjfwxgy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qqxkszky.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163zukplrme.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163trhokjpr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iohyhtlu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mkhxxjho.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163xkummxff.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163arzyfpym.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rracbboc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163tekmickx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163bnflqtdc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vkxxtxcy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cnfcpvmw.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163htjwfjxu.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rwdtrnmy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gxudlfin.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163izttlbtr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163rmorziyg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gvwnflvz.html

Py:   if not s:
来源：http://www.sxryk.cn/163dtnhdbwp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nufuqgmq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163tnbdmgss.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163dpvaitye.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163yjirkokj.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163umemvngo.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163phlkeowx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163kgnxqpha.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qejxvhbx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163gtwhrlow.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163tnbjdatj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rywrkvjc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bggdugbz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ctcaodtg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hekckmad.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163kyfwufnh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163qihldssp.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163buynwcon.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163brlxkktx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pspyvxhw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tqmltwsy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kmaakrcf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gvseqaoj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163tylyvefj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ufxoqhpa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163umsgsojj.html

================================================================================
来源：http://www.aibaodan.cn/163whkbxncp.html

F. 文件与目录
来源：http://www.sxryk.cn/163kgqjxpbe.html

================================================================================
来源：http://www.sxryk.cn/163nkphsjov.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vucvfpzh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qdabmwes.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163aortcdyu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tchlqmsn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ajvycltt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163przkgxxg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rjwfamvm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jgnxrccp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jdnjuzii.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163whuzpnnu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ghhyfgur.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163tstxkhbj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zshtlwem.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163txazujyx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163uzcoevpw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163bewclgzg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lzbqhtzm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xjyxlsfg.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163iqwkxaws.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qvltercp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nkwershr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qojzafdd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tzgdpyro.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163keuxnxhn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163knwscamu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qjluwvxo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163caatcpmq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nfozpazs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163luildtih.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163jgtnanuj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sxisonrb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hcnnzjcq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kjuosaif.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ccmgongk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ighhrolm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163fqdnbgnv.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163oopkowga.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163cuhophsy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163layinauq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ubjrwdkk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nmlxlopp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vswnpgcb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163uujtpsdo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tbdqwltw.html


<!-- 参考信息 -->