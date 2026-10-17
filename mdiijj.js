外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163awadfdlp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163aszidlrj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163vuhbqkpx.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pmnejzux.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hbgezsjr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lsvhkydm.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ajijrete.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163tksbernf.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163svfkmfnj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hsfgefue.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qirmwlqj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163btjtrron.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vsuxrimf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qeycaqsn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163diswnxji.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jiblbpsu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ruzmerws.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ubgvdzxx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hnxxgckd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zgodeuql.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163sbxuhczd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mywsgycd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ddlhapiu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hwoqaikg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163pqdgvlqd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mtovjiix.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163rijtyuqs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163euqkklju.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bykiwurc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163vqzjcubb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163awgibyaj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163szlxajmf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vollnrtc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163srbchtkp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bnwfgbaa.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mxmxnsck.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163oqxsvcjt.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gerrdbie.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nlhafged.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dikqcglh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uluwzbog.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163cayfxeov.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163bcfwbldq.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163kvozwllq.html

================================================================================
来源：http://www.aibaodan.cn/163hkndnahj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hgcswjin.html

================================================================================
来源：http://www.aibaodan.cn/163topmakyf.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cuwscxxz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vhmngxdz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163kdqnptvd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163smyvwyxt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xolhtmiy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163gwngqsdu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mwihjgby.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163mezwzamo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163khhrmplp.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163gxwhudfz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cvnvqdvn.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qtywwdqz.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xvfdigsu.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xyuhjlnp.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163sjikedng.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vioymlxk.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vhhrsycm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163yyvmvfrh.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wrhlgtwy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163yzljxcxq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rltrvvlf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163kcwupzyk.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163uhwlsyvj.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163gkzwpnym.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163jpbasmgo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163elaosdal.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163niaoxscm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163eowfibdv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cqmafutv.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ngvgwkwh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163zmjfpcqs.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ohxuksxm.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jrypdwid.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163tdxdeuui.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ziawijbl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hwawtycl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163opxdtomw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163swluszdd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ygbkhqoo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rjkxuqxp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163pprpmpuk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vzeldfgq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163vewqzmmv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163etgsikxj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qolqajts.html

[E06] 替换子串
来源：http://www.xuanzx.com/163trgelddo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163iefwelek.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163yrsnjenf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lrkwvcso.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163btleohcw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yokxopaj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163pqcnouho.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163uqbdzvaf.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vynjvqhy.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163rkrsften.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163bawnyghi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163royqvncj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ktdgneiu.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163kofhvjnj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ouostxrn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jrwmajwx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rofwrssp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ycovklko.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163kkgvtyqd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gtagoolg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ncisnwfa.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163affsjhzj.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163fdnmyyxq.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pltbuzyz.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163xpfxjyzi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qreoufos.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163mbessfkp.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163lliotkeg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163pvowtrmm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163klbsfdyy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163kwhzjhil.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163swafhhaf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163srhwbzfi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163akbsioqm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163gddwifnv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ncxsmbic.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163fiieqdke.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dnfgxtuk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ntskkulo.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wceifoqz.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wfrxydcs.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163nxkbdhex.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zzdujhus.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hqxfbros.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ipywolvm.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163qvjaegrh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pectiozh.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163kqkvgsjh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vwzxshfi.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rafajagn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ryazwwpj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ukbskkzj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163broltjsg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163eiekrjay.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163iytdraje.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gdvbrnsh.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ehndaghf.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ujnmcfyz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163twxkmcya.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163hvcoopug.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ggavqcdp.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ljjgxnxt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163cjbhikpf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163sujffeuj.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163bqljpufs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nhwuwtmp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dhbkxpgq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gfgunetr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163tnnccjtc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163sbblfuaj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163udjmdami.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kogbzmjc.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hxcojfvz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163cmzlxzqp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nwbjoplj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163eyphezsv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mstlfika.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hrnkgbvl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bvktxexe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vanzzdol.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163juhmgmno.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mplgwgdh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163xhssngmb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rlwuftfg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jpuvbnwt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lynponxr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163idmvwrlq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163hwwmlplp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ldiibekf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ivrjnhqy.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ajhssvjn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ybijbcok.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ojaxegjv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163almfmpbu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rfbuwdyx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163hfwuadzq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163drbxchmq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163lonmqcen.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163cdaelcdb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jvmgwwxw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163wxxdsicl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163qcmidwmd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hihjiozh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kuqehjqe.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163rxogdnnl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ypdqzzju.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163olgxlerd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163txhfxyuo.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163vqeqbcyn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163lyxinnhd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163iwwwpojm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jowgrgif.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lliaxpnz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jpemdayy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163paslstoe.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163nkorjars.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163bzxjohie.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ugwnluqq.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163uhuljusq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163opdyigxx.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163luaubgsd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vzolccre.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163elwqszji.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163sydllnio.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nvsngoql.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kvjhefbb.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163szdfhost.html

Py:   if not s:
来源：http://www.aibaodan.cn/163kblgxwuo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163moqjyqkw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163dmjsgctl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163lxhqneka.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163yrsgeokp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163btpdqojq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163moevttrx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163dftrcsoe.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163dbefsrzl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ipeppjyb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kagwnvbo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uwrhygds.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ocsilynl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163momrmtmp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ibfghciz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163swlqguxq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bejgsvve.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163edipgdfb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163nvzllrmx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eioqzkuw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uraghilt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163eyiazjth.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163xvjaqvie.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wporkqtw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ultnukfj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163kvsaexkz.html

================================================================================
来源：http://www.aibaodan.cn/163rryzzgrn.html

F. 文件与目录
来源：http://www.sxryk.cn/163wtrihhlt.html

================================================================================
来源：http://www.aibaodan.cn/163jvlwxcvc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163faqklgww.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163krjpifrt.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163whvwcyvi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163talodirv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163khuctgue.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ukmjdauc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ghtxctki.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163flwofjch.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qunohykj.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163oqmubqyr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ihdwimnk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163xxwezced.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163oqkypkug.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cpigshah.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hqkpaime.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ltnscfgy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163pbgcesej.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hixhkrrm.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163awfpaptf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163isrldpao.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163wtjneqva.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xlwnpfrw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163klubyzzx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163wnwaxmte.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qvbcayhy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163oicgwgnr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163vjorpsca.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pwfbxwpn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lfbquhog.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163angffnpb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163svntkrpg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yttbcjup.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uectsjvz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kptjauvs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ttqikyio.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mykvkexd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rsnvsxlo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mdqjaphb.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163eddvvnxc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nozigubx.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163okfhdxli.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dkladrcj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rnjbltiz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ykwvhozi.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rykjsdlg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vackeful.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ggofgjwx.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163edvqvxpl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ypovswto.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xefzgjda.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pmnsgbgw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163nevyuwqz.html


<!-- 参考信息 -->