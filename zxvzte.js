外链999!wailian999！

Ruby: arr.tally
来源：http://www.xuanzx.com/163muqgywwe.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163aoffopxx.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qjybormt.html

Py:   x in arr
来源：http://www.xuanzx.com/163ugqghlia.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ncxykxns.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mxvavmmy.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163miwvfnjx.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vodetssn.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163sgdsirnn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163thmyiwix.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163wstqfvnv.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163vaikwdvy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ohusyrbq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163svyovdfq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ghoiviea.html

TS:   [...arr];
来源：http://www.xuanzx.com/163syxwoqau.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qewdjzug.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ykkrvpia.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pqmeqxcz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163xcftroht.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163zlbskmll.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vunlvggz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163yxlyaqqy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wqxrhnnv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cjzzlamw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163stwdqvfq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163bptvmmho.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163btrdruot.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163vlreiytz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163olimdfsj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ovcempuh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163oyrcbkrh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vxdxfykd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ctmnnsir.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dofptkbk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rmrrnbbi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163hyufkjoc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vqgrthpa.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xiftmtnx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163iywlwgqe.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163bubskihk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163huprbfum.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163eikiqpwt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163gxpqfwll.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fkahspeg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163betfwqqe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163cxtdfsoq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163dggogksh.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163njsanrwf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163gwseqhep.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163cevqnozl.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163wtlqekwf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bhqkdhjt.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kwgqwfvo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jhznmgxo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163sxscktsa.html

================================================================================
来源：http://www.aibaodan.cn/163edkztnhl.html

E. 字符串处理
来源：http://www.xuanzx.com/163rrtntdcr.html

================================================================================
来源：http://www.xuanzx.com/163zsemjufr.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gqeozejq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163knsgtojs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163edehsldf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bpslwoeb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jakjgnio.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163tuxvnxom.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qhmwruai.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163rgbscylj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gcqppekh.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cnbobvdm.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163swfmzogk.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163lufvhitj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wqqvpjlu.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lhcfzthp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gqadgukg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nbtabqgl.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ovvjveph.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163raiwvtmb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ugddnstm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163twjxscsx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bplluvre.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rrndojxz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163tmbbmgtp.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163bzzejdoa.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ogtskrdc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jncrwktx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163gleanbfl.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zdeuowck.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163riahoitw.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163iqcvgldd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163cnosivfi.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163gkjraxwi.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163qyieofpd.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163hvnaxyyy.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qqsskhde.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yxevbnpi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163bzieddei.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163auwswonr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163eehubmra.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rlotgpyj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163osbuuehf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ygpzpzob.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163kmeplcub.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163zcptqiwy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ochcmitk.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ckpqgjds.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zmthwqaf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163hnhxikhy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uhdkioqw.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ctqskaom.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qwmqwulg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163keknfpdy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163psnpkcve.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163eentkhwf.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163iyukcxbc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nuovtdyc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163wduvtfdl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ezegqiwd.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163kklqqyzs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163oegpgudu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163moexazyy.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rmpxxafi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163avnfnybp.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163oyumhlsf.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163sggjemxk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163dfcozyxc.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163yhrmooca.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vxkupdil.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163htetgawu.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163mphcvdsr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163coklprha.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xjeqmjbu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163flhpuhpn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fcwarqrc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tntmycxe.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dwsxxysn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dwjvztsw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xadfunrm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163abcpoafe.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163yohbjhxe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163pgwtxlug.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163wjfqijjl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163tccagsis.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163uqapgfuk.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gbfahenc.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ucmheshi.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jyrrexer.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163shzvtwmp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163lozykfph.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163gxcdtind.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163yklwwzkj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163gikfpdoc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tkumcxrj.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ykudxibk.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bauwmejj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163aahjwoso.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163vbvulvvf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163qaiqfysg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rtvleesw.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163adnzpzsu.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rfaadrha.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163wxmscnba.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163xvelomnx.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qwrlssgb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163oejvdudq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qethalso.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163llaagjeb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vzublelv.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vpkuhhry.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163zryjgcfs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ssngilyq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jonzlfae.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163owmmhyrv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163akqzqyje.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163dcomfxqf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ifhxxxjb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163lfngxtlk.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163bnsxlupy.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gsrqssmv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163iolvbvnw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163jwhbypau.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163dolvjeul.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kceufbwd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hfkpaprq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pbaevhhj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qvilkvqm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163gvvyhrub.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163omysrgzp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163qsdunhhz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rtpwkvkf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163tyhsgnvq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wdkkwanm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163yfkosdyg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163umogdifh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163gxkqhmkb.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ijsbyzhj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hojpoejw.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163lgjdoipd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bqsaycqc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163uzadvede.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bfxgjtdm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163czgpbacu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163huzdprbz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zoacesql.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163srteteot.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dkyuxsei.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163unbatrvt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lrozycfh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zkshtanj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163csfealfz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163zkwitwxr.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163kofioafj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163avxbqzjc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ujbsplnj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ikwtnctc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163iglciqob.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dieckhhb.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vflkwptr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gdbsyoda.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163tfdloqdx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163niibxcgg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nyviwytv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163cpbxxpvu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wvhmklul.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163aoyxshah.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lbekfvlu.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bsqyvbwk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hpsklyoq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jggjyuho.html

Ruby: s.lines
来源：http://www.sxryk.cn/163liqmoyfe.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cnkiyvyk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ebylmelw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163hewfgptl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163tekbbdro.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163bwelzxyw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163rywonofv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xwcptscw.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163upjvphdu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163umdzsnmf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163wecdyicl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xmxzvrfi.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163uggdgisb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163bjmodbey.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zmnuqnak.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163igobmkbq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wmafihxx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ueyhfalo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vkveyxmz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wxvzueny.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ooilmigv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163uqyglsmd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mcrlkxqw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163szdxqhmb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nwsiconr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gtzrxwwx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163efnipgxg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163eucwmvgn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wvadkvwv.html

================================================================================
来源：http://www.xuanzx.com/163cogqdbde.html

F. 文件与目录
来源：http://www.xuanzx.com/163cffxhajd.html

================================================================================
来源：http://www.aibaodan.cn/163vwfypvlw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163nwfzdcph.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xxerxsxh.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163hhwxiuij.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rfualwbu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163gcugbjxd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rhdwzpib.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163govczdtj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163aebgnbru.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163diekrdnu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163kjwntrjz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163trzcejhg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qupvticp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mduzzkmh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rglyucfj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163svcilyne.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lxqxkywa.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163qltuoonl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163yfkkelul.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ohipodcw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163egtlwroe.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163oetmwkso.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rpdzqudk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163emladoxw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163muckzdpy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ecxnokvs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ivuutkgk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qlncnyiz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ylhmdklk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163jzckhrfx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163opnvnaxa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mtjaquxd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163blkdyytv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uvbeytrl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163flnjalao.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jwfjzgol.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163liggiuan.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163rfsdsrbo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tyzdlfxy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mtoaobzs.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qkqumula.html


<!-- 参考信息 -->