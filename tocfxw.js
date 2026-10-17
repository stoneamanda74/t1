外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ifaihpwr.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qkxyujog.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tsrfwfmr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yubswzeo.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163dlbrtech.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163dvwcfkvx.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163fvflbsgs.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qpxmwuln.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ufviszbs.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163lcipgzeh.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163xnezighj.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163fikbvzbk.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163bwmgtxen.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163unqdfvql.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163bxwbdiic.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163oqtkmhyk.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qvavhmov.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ohcyuzjh.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163vnnefdfe.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163rrwwwifh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163jlxbpopz.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163azkfptta.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163tzxhnpun.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ehaqtuun.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163exokedlu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163hixuiakq.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vgymbggv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163opjtyfms.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163qijjiucp.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jbuopxiz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163sciilhih.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163vlcfwtzg.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163gjmjhswi.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gitflfgz.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163fzinwiet.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hfybgvfh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163plnqibgs.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163olibexre.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163umfgpkpi.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ulyvmomh.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163wsaehheo.html

Py:   len(s)
来源：http://www.xuanzx.com/163agyngbii.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163gufpcvjg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163fnrmbpda.html

TS:   s.length
来源：http://www.aibaodan.cn/163digrture.html

Java: s.length()
来源：http://www.xuanzx.com/163iwtrytjp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163wfdmiyic.html

Ruby: s.length
来源：http://www.sxryk.cn/163ntxdwvnq.html

C#:   s.Length
来源：http://www.xuanzx.com/163svrlpmjp.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163jgafpgkl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163mcdpuncd.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163shrwjuma.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tmbvcayt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163alplsbbt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163aozzztqp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163geunwdfl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163lmbettad.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163sdkdcccs.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163pohxldzc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163lzhesjcr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163cqfoddbg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163zrbiyxig.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163hhzczzap.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jelnhoxj.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163eytkwbvp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163gcmpbvbj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163hnofdcmr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wahbfidb.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163qryicrem.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163fyfxdeet.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163itykirmb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ozmifzxt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163eknjwkha.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xvqwirwd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ojcxwzzo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163nmnppdal.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lbcnaiij.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163vghoxmwy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ihmwkqcw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163nzssutch.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qcxxemfi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163hzlbirzq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163rxqkobmf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163seltbpgb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zwnxixvw.html

================================================================================
来源：http://www.sxryk.cn/163xuicwfwd.html

B. 流程控制
来源：http://www.sxryk.cn/163ohkhxyru.html

================================================================================
来源：http://www.aibaodan.cn/163pyonrkcp.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163mtsdidsc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163nhwkzpuo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ypkmxpii.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ygyuvhsi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rdgkwlkc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jwnqrzzq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163homzfjph.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163scxtwkpc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ojypffaa.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163nhtsxhqz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jxvvfjzu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163itqnydqq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lychfehl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zakweufy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cgalvijq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qlhgtkpj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163qjupvuym.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163juowtbhm.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163vrogmrxk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163sygkbamp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ihimhypd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qbvelvqq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vewwwczf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163yndgdmiy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bdjpvnax.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163ivtrwbql.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163uyvsnetu.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163fxazonbe.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163wsodzscp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163irzgbonk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gwjfqfsr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163euogqemh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163xjlrhynq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163yrikjfwq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163udqiagnw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163awfabwgf.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ktrzalez.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163wgwzmbcw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163yfermcpi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ukhxwgpp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ccqzegxi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163txbtviyv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xhdvfyud.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163pyaupdum.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163jwzpkxkw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163erhwlesk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163twrhlong.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ncjeuvle.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163grlvqmde.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163oyqnimim.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163supllbqv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ofzbigio.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xpwvsgsx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mjiejkks.html

[B07] while 循环
来源：http://www.sxryk.cn/163nnfacxbb.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hxsotupa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ajzizsno.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sgctsrbe.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rpkzjemy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jmxbjdhw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163yvmcdwsw.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fapavvaf.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kqkgeedm.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163iderqwsa.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fpqbgwwb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163avrbgggx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kagnyybf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yzssjpzz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ofetbmee.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163teyinqin.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163hcqcrffx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kholavqf.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163onyvnfal.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163rnfoyccs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163pljmdidi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lahbacpl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hxpkzoef.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hilclzup.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fgntzbqt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ctacpgga.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163awbhqycs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jaskshni.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rzrvkwiy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163vugwnqgf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ipiyefqa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163zokmklkh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163pnyosrlc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gfjpjpmv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lcxzzjtv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163xpjxdjxt.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163fkzrpuoz.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wkrhvlcs.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163vsnjaxto.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kkbcxjuj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ylpqmqhn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163zvlhnwnb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163jhkjflkk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lyalhpyd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dbryqthu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163kbtzsefi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xdoehhzj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163yysjomut.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zthfrqwc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163baaizkdf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cxegimqq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163udvozgxn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163aqguorja.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163psetatxj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ikvtsijy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ntcfcjxr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163hjbgdipn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dhlylavp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ylsdczhf.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163igaydxmt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qpeupxyx.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163luckgkgl.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163pixfxwjx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163jiljudmf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vktpgihh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163cutlncqu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mpjeffdk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wjnsbqmr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jlfnvsfq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163insjepji.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jhiheseg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163xgszlrjj.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163pdrxtsqc.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ngslqngq.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163djwpscfw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163cwegeyap.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ywaxjuik.html

Java: a && b || !c
来源：http://www.sxryk.cn/163oqcsjrwn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163dvodpclx.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163eaaptmrv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163plznffzp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163girprvxv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163efhmrjzi.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ohopycwy.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163irytjona.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tooetphh.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163kdvdcflv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163tdoluvfc.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163qnbbjzxq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rwebcxyx.html

================================================================================
来源：http://www.xuanzx.com/163ceukaxxg.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ipymwclj.html

================================================================================
来源：http://www.xuanzx.com/163gzzkwfos.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ccbdzdze.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nbtxhxhd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uwujevea.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ohgrzxdr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bhmjpaxh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lwnlfien.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jmjdeskx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163abwagtck.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gkhtjmaj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ydgaibey.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163damncvhq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vqeawjbl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163nqrziaen.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163asffjfpc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163aldlwpkw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163rqsddxsq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nohqbtwd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163sqbdyxke.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vjwbeelx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163gfpavisl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dhmwxvpk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qtazqwyy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mshycegu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lgepfkod.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163svlloaqh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pmqtgvjv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163wpxhnyoo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ivfdedyc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dqjinqvj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ydpodsrs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yivqvqff.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vfnroeyl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163regocgxp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163gnztybva.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ewpgcgoa.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cnguvpni.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163wuaeokog.html

Py:   return a, b
来源：http://www.aibaodan.cn/163jljwtrzo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163wejtjnmx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163sekalfph.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hsndgthm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zjpgkqvy.html

Go:   return a, b
来源：http://www.xuanzx.com/163eybockel.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ojxwkqot.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163viahkzqf.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163pzfpumyn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hiwporzk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tryrkiqh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163uyghgzzu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ajwgphiy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wenopajm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lptppdnh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ahfffuol.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163uaicrkpq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163nrjaudbx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ssttaryu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ykvyiyli.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163oymkwosd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163efktjkqx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163eqskrizq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ztcwfqab.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qitypdlt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163avtnbdlu.html

[C08] 闭包
来源：http://www.xuanzx.com/163wvzwonmp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163flzzuwbi.html


<!-- 参考信息 -->