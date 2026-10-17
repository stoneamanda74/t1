外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163gkwvjxhp.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163xjhbqhpu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163rnyptmak.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163bqkqoful.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ktainarr.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163mzkbimua.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163yjbferqc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163fsufoanl.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163xolcgdzo.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163wnpompvz.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163chzgxgdd.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ojpwybld.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163oobjdykc.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163eufxmwmo.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163hdxbweno.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163mhemlsau.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rqedosth.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163okoyulpv.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163pqmlcecz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163euzigubo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163qnemrkcy.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163prktiuse.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ngvarisg.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ewrhhnaw.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163oetyqpok.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pgurxyav.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dnkujtou.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163urrmhuue.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163lvtpptwk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lmlincwt.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lqzptoiu.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163tfbhddfy.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163tuplxtjp.html

Py:   len(s)
来源：http://www.sxryk.cn/163hnpldsot.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163vkdcnmiy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163jmtcbjqc.html

TS:   s.length
来源：http://www.aibaodan.cn/163drfvkixz.html

Java: s.length()
来源：http://www.xuanzx.com/163bpdiribk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163nrfwbbwu.html

Ruby: s.length
来源：http://www.xuanzx.com/163xhzfxqex.html

C#:   s.Length
来源：http://www.sxryk.cn/163itmdoygy.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163otsjjqwe.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163hqhmojuv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163hrhhpopz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hxezcfwo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163drvihfwk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163dvhxycmi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ditphvva.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163rznjikrx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ovlutbcj.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163iwtxbgaz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163hxdjalul.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163fclmtulv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qsanhwuv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zxkkophp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163oufsdzmf.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163dawksvio.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163gbzbscob.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163skbsptjr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rfftkday.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ezpwgenb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163sjodpfuv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ynwgxzqg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163amrdfrom.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163lmymjyci.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163heyljydt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163wrelpyvd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163urljxngk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163oydoapdw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163vfgipiac.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ygyinjxy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ghogcmnn.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xjmcxdyl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163stcftxas.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163xwdgpcdt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163zyvntijq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jffnhait.html

================================================================================
来源：http://www.xuanzx.com/163mmiutvdk.html

B. 流程控制
来源：http://www.aibaodan.cn/163slytukcn.html

================================================================================
来源：http://www.sxryk.cn/163lhloqvff.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163tpujvvri.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163sscdygri.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163bgkmoaso.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qlnfwfqv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163krgzeocm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rawigprx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ojjzohkg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163kzrqbnpz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mhjtmuxo.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163vfvuawbc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ihorbasc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163gkpvlqro.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ftoizrmd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gwpmnpac.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dxoljbvn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163kkwubrwj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163prhlyyhy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dovuyveq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163khkvxewp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xlrmjbdb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163iyyfhyvq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nsgpknrq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163youifuks.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163edusjtrp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163bsshwqrc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163xdgdbzkn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qejvsfwo.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ihspxhjj.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163zdovwiad.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163eifszkac.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gdbasasm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rjxfsrru.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163wnsetcdv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jifssuzy.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163omwifvog.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163oigoxrux.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163dfpitxst.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163eilhenps.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163uywfupwa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qhnywqrx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qqbhlhll.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163rdiozuhh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163wspxgldl.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163slexwsnr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163fmkfsiuw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163rkpfqfuc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163leplblhr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rgxlublw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163dgrskxur.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ztqlnqtl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163bblbiifs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hxwaohri.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vjwyxlli.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163wlzmjvwf.html

[B07] while 循环
来源：http://www.xuanzx.com/163pnkiptwx.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163rjfdabev.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163emfbrkox.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wqygvvgc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ndllbxbr.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fhfiueiu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163iopbhweg.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zruswlpm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xcvpvzab.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163mupptzcf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jxatzfgp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163lvbzmjdj.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xsxtdheu.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163azpyuxnw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ccwneaxj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163zbaluoot.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163owentlak.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hkvfpuiq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vfyuhqns.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163htuccdqp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rmgtertm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163shkruucy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oiwqfrsb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kycglceq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163kbmlmksk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bmqtmtet.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qpmicufh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163uqwkytsj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ginjxyzw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ektbohwj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rtqohmbd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ewmdzppc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wyfbjmnn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163pxnffblg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163zddplmnw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163sxatsmhc.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163wlexrxxb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zwsfexjk.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163fcequnms.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ertnsxju.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fdpzrnts.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163bxhxuejh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163mtgwpdsi.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163itagquvy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pjopvqii.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163nqwyjxyi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zqufdlyl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dpedpikc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jvapmapy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lasaldup.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163oqtaxroa.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ljfivddn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mcharbeo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163eshgjtrv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jmvjykcl.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gbojmuyh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163yrebrvtd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zwvnmwgw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pehdebqn.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163lukduefv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163uejjfjcc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163dsnizgrs.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163weyvxmny.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163mcglyqbo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mhgnirqh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vcogfgfh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jfxtgguc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163aepkprly.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163nvfzziwk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ahdzmmae.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ibxvjksd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vebzqsus.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163puxjxasn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163txivlulk.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sfydvvsf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163kxcjpbfw.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163uyrjaoqe.html

Java: a && b || !c
来源：http://www.sxryk.cn/163gwouqigh.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jtqljzkp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163bqycazhk.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ampebqye.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163famahmuu.html

Py:   if not data: return
来源：http://www.sxryk.cn/163cdoqalxa.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qdxpjxhf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tmpoqacw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hspbezvf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163oaihakbb.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163eordvatp.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163udyxjygr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163szbysekn.html

================================================================================
来源：http://www.xuanzx.com/163pnxxpdiv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163kfrwcwdy.html

================================================================================
来源：http://www.xuanzx.com/163ltebawbd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bbpdqkpt.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163cizdyufc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jgrahrno.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163gwumuhyi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zlpdbrje.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163npnpfhvg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rjaseeon.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163rddsbtud.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ofttedyp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wcljnnle.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163tzuweeor.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163laypxebf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163dznmvzfr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163qafmlbnp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fuoblknn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163wihuawtb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vrpinrqm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lltghemd.html

[C03] 可变参数
来源：http://www.sxryk.cn/163onzoaflp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zlicjfgd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163kfhjiwuh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rntnoloc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163onqqqqir.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163tyngecqq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163vhyothie.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pytqryge.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nsadjvcy.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dlumzyub.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xjhgsgns.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pxudmgjz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163itpsykfb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qawfvwga.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mmnbtpbt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ufttjhyu.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kpeiwvgc.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zenedenv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163bxpzlitn.html

Py:   return a, b
来源：http://www.sxryk.cn/163zqntmekr.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163doxjzrfb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163qhwfhsdv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163bxujbrxl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163getvphhm.html

Go:   return a, b
来源：http://www.aibaodan.cn/163lfdpjjjv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ghhowpak.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163zuscpzvc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163cyacawku.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163htqgbtle.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ummqkssg.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163fnbqsajg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163gaqpfqav.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163pslbrxtd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163cwxsjaoo.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163scqzkulv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vgsssdcy.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sxnogplq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rnzrhghk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163bzdtjvyc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bfombolr.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lixxcfgu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163iejxcxum.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jqkabunu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wslrugkx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163urunmmve.html

[C08] 闭包
来源：http://www.aibaodan.cn/163pbeyabqm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mwybywpe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ftkrlnor.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ocuaihej.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hpuatwsn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gmzroiik.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163lzthktfr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fqibsdqx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rdbwejpg.html

[C09] 递归
来源：http://www.xuanzx.com/163amwryiai.html


<!-- 参考信息 -->