外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vlrtvyvk.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163liwqfght.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163saombrna.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163tqahopen.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163yyxirjch.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xkgzyvij.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163twsdkuyb.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ptiuqhdy.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ecyfchpt.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163kouylbzu.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163fpcesmvk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163sjhkrqec.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163wwljygvu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ckfbolzu.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163dezkufzl.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ndberskj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163gaemjfpl.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163hcpjkuie.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ortihjvj.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ksepkxfg.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163mswzfsiv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163opfrqdty.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163yivjhgsy.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ukjizunb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fjedxeaj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jlyudhyc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sojtjgol.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163xksulsbx.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163plxeanob.html

Py:   len(s)
来源：http://www.xuanzx.com/163nkfoosnc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ifuslqmo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163eyhpknfs.html

TS:   s.length
来源：http://www.xuanzx.com/163uhavofht.html

Java: s.length()
来源：http://www.sxryk.cn/163zelxcsuo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163vpnxytlc.html

Ruby: s.length
来源：http://www.xuanzx.com/163bujerylc.html

C#:   s.Length
来源：http://www.xuanzx.com/163rslwctwq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163jhzbpytq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ywejetzf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163zlmtamfv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xrlcsqrz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ekfpkoav.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mduqelup.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163jdvpuoer.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163kdqjwjwp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163nkelmvih.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163rufdsois.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163krlmtwyz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163weaxasxl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qxsbqlsv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163togamesh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163dyixbwoy.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163dlxgkppa.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163xhfwslbq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163hrqdzlap.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163riszwjxf.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ofrtmkcu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tkgtvgrt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kalliekb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163lnpiprvi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163quqoultl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163hndmwtpv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163edmcguql.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ycxvclvz.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163fylpdzbo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163kbwvmgni.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163zkvcimun.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163axfnskzh.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163olhhnthm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163elwowokw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163yhrfuruq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163fvtzrrac.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jhjxplxg.html

================================================================================
来源：http://www.aibaodan.cn/163yriavadf.html

B. 流程控制
来源：http://www.sxryk.cn/163oyhvkefr.html

================================================================================
来源：http://www.xuanzx.com/163jtkqnfay.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163klzjjoyv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163awjdhcbx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163xexshtrq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fjlouqkk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fwgullvj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lgufnbfs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ywmgppxh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163nlchdkyb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dgpjrvqq.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163svfdawds.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163zqoqaocj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163rouhlekn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pxouoixz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nzpiazsb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sicfjjgf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163xynvdkox.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ikdlvhkb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fsyhpcrq.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163axqmdpqp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bmevycmk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163reaxuqsz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163yqllrglt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ybralvpz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ixhzikxq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ugnntwwm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wllikdrc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ljelhfnj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zmowgqkq.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163mqyaryck.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163yxmothae.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163uqzekhrb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pfeixqnl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xbucdiay.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163nbgrbtyj.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ntbgpaam.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163omiijzgo.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163uvwhbvni.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jeghgclo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163degwqgcd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zacnynou.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163anhpzjdr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wlpryofv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163slzwbwga.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163oiofegoq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163nbksdaoa.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tqrodvbm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163haliaxag.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163astanulf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163emgjxhhi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zjmswcdx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163vpafrnjb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163izcmirur.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163wdcvedmu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dmtftszk.html

[B07] while 循环
来源：http://www.sxryk.cn/163zslmsiwr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163hjygcqxx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wnlmqfzj.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lzdacwnj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wscpzaeb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163goidkyxf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163limbmrxf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bqznixps.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wifsdlbx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163mashftpu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vmabiupb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163tvymqrei.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vauietjq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ycxmybrt.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dkaojmnz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qadpjbge.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vpjaoujx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gqdvdngk.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vbmiclxy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163uqdppund.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163halxpknn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163djpdxzyy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163azndgobc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dfuuiisy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163bfqetzaq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163aqaqgmtl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bieaeybh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163khyfvvqg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163nmdfmrcj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kbbvmfcu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163hptpkozj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ygdhwmxp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163blgltivg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pncqpzqa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hdshksfi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qceicqed.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ipsjtbmp.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ktvzvthb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dyoiqrcf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rnckayod.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nkcsnbyb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nxskltgz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tjvaxtoo.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163whqozkco.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163rpdnuxdh.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pxlawaof.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163lsrjpekl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jysvfzmn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163plqzqmiw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lklkjriy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lnfpahqf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gdfiivmw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zexuhhkz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xfedobyv.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163xqpavibm.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163lsnmyumq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xdlzlnqh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163svnhyhqm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xalltuzn.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163dmhnvdye.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163uhmwbibe.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163bgkyebsl.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163sojosnir.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163qslfqezx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163tqveityg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tyksmook.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163orfjyvqw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tnotfbxm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163edribqiz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ikbmqfra.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163pkyvwgqu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zkokbtnv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163pkgouvah.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163nwubapod.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zifcxhly.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zhjrrxlm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hfmpfrbb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163izqnytvp.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163nbjhiukc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163stfgkiwh.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163auybkpvw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163cmdvhnrn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vufjdfjp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163eptbrhxf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163cbtumvbg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wyeyoolb.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163bddxeyxt.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hrzqqkll.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wcmpwwic.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rmihgnau.html

================================================================================
来源：http://www.xuanzx.com/163syyenuwr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163uetjmulh.html

================================================================================
来源：http://www.aibaodan.cn/163ccbipesa.html

[C01] 定义函数
来源：http://www.xuanzx.com/163pivhings.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163mjbupjnv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rzdqotyi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163oqcposbp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163oigmioye.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mbgibyiq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lpxzffqc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kzqxkeal.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fwizclqm.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ylxnojxa.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163qinmnjvg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xxveywfm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163gqxsadeb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ybejiwix.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gjxyafgl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vtikaukr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nnofxwze.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ahvajsjy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163lyitrhuj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rzgyimkb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gntnmpdw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rqoauajp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hsawmagd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163zmqnmyas.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dysrfejr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163wgqiblpe.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ygdcrluj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163azijwogj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163jxsiqucf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vuarbeip.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163luibfwdp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163wmdqfloh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163voroyksn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nexlrnwq.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bmquefzr.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pjykhbuv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163srtzakpx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kiepwcgr.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vkobwwpd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163bbeqottb.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163awhkfrsy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163axobmbto.html

Go:   return a, b
来源：http://www.aibaodan.cn/163kmaaqhjw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163iybhuzbd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163auewatij.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163efnblpec.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gwiwvjfq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163updtiuxg.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163htoudbck.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tytavkoe.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fkbedrmr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163scpvwsgf.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qfgrtrhc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163taxtazmb.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mlgqwnjb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zzthcrhd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tjrxdubm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zmoausmb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163yaionzdc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ttxlvybq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163qwveswnp.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163uqrsotov.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163drlslaxs.html

[C08] 闭包
来源：http://www.xuanzx.com/163lwsklefj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jqnsvema.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ecmycfwu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ufviugrg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bomntvqm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ygbgzonv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yhdwydlp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163innjaewh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lhdtkmnc.html

[C09] 递归
来源：http://www.xuanzx.com/163tuxlvdhs.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163clawkldr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rhoavamp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163htahptia.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tfkumcoo.html


<!-- 参考信息 -->