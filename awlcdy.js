外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163bmnuzndd.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163rvgxerpk.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163gvfpszkd.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163srjhrglo.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163xtmmdydk.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163xarrobvc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163mltlchmm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fmmaiiyd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kplldnjb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163alptugiv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wjmppabe.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163vfpkklvw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ljhewufy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qgwdtqid.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163pdvlffpj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163gjkycmib.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163flihvdcd.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163pvfvkxrz.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163igdhbkky.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163uhbskvxc.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163oiwzmkxs.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163xlbifsgd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163bfaiqryt.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163jodacypz.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jvlyhfwt.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163frckuvui.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rugsdoqm.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tsqyrykm.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163avecrfjr.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dalvbuia.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163meqvvflv.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163iqttqgus.html

[A14] 注释写法
来源：http://www.sxryk.cn/163zcgmcwrz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163dzcowhwd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nkgyryaf.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163anjtsmud.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tzesethd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163cardsvwz.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163olahlsny.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163kjlryttw.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ypnfamhp.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163fpdnkryv.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163plltqzty.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163sykluquc.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ylyzalnc.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163fhetzraa.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163hwukvsds.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tsjpdjvj.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163jsnwtqeq.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163kpxkypfr.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163rzlhlvdn.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163dbxsgvoc.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163qweybirs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163hytodcsf.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163txzgyfop.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163xwfuazot.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163xedkjhsv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163jyezelgt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163yjjyshla.html

[A17] 位运算
来源：http://www.aibaodan.cn/163oatsfwvs.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gczcvfcj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163rxdhfqcr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qxjujtlb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ndzmbzvn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qkiegjxp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gxdxsxiq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fmqlansq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mzbyjvzj.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wknztzqi.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163aowgegcq.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163oqxtsnus.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163knbuseyr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rkkzxevu.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163dknqksur.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163dovhzjob.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163lqfedteq.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163bzjzdqei.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ifqmqrmg.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163sjhwdegz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163nylnzfrr.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163poenasyt.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163eutslbkf.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163janicois.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163nqwlxhpn.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163msedknde.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163fnujhvjw.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163hbbzmarm.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hpckfocc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163hvuuyeyi.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163pbqziigd.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163lamvuwdq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163dwtokkyz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163sqzttykw.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163rkheafth.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163nmxvjmvd.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163idgwcpga.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163helgqoaz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163afagcrax.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163sksjhoak.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163jmkksghy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163atsdiuth.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hkbghgdo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hnoylixc.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wvfmvbij.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163bdtdukdq.html

Py:   len(s)
来源：http://www.xuanzx.com/163rqmohddw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163mfzoyboq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jtebgfmc.html

TS:   s.length
来源：http://www.xuanzx.com/163bjrfqfmz.html

Java: s.length()
来源：http://www.aibaodan.cn/163hpbdmujr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163uceweywb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163hrkvfgnm.html

C#:   s.Length
来源：http://www.aibaodan.cn/163oxqpmgzj.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ljbgaren.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163jjsmubkv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163cwwvwrui.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kdpvviih.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bbnzntgk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163oxzjfzff.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163xaninitc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wlcsrrkp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163irqxrsoh.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163sqtmzctz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163dyvzuaqm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163gzcfrdvt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163axwcxkih.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ogaeryqf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163mqullabf.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163wzbgxikx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163eihxzrhg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163uzmbjamt.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163clsgyvon.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163lhusujaj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163gfhiwzrp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qwhjbbmt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pcmumsft.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163xxikrbon.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163byjgyztz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xqxkrphb.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163jmbfplsm.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163dtgjoiqs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ujbngwyo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163uvwmxnsw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163yycxhdta.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163edtxnozk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163zyhmywok.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163miuwxhxy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lmddsmhp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163otmfhmou.html

================================================================================
来源：http://www.aibaodan.cn/163ejjkkwsk.html

B. 流程控制
来源：http://www.aibaodan.cn/163zoiescbo.html

================================================================================
来源：http://www.xuanzx.com/163hhwqreee.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163atdfrmnv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163lchsofeq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qjsjmuoo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cdverfnn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nlrlnzwg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cqiqhakj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163dhhipxun.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ykjrblnd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qtmytxah.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163dtgbnjdt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163fvgowjfx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163rqbpjqao.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163puvouusp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163roafzial.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163iirojxiz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163esbkyole.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ebgtqhpe.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ctwpmxgu.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163rgreikms.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lzvfsoow.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163jdiestdk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pjxxucqh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163iiffvokg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ksnmpkes.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163jowilnlh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163aaroaagb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163lupxjqez.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163yifgxklc.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ilomssxn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163bhnuozie.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pvspvjxn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163goxnftcw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163yqegtdvq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hwreeafe.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163sludlkfn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ptmhbkgu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163cvkombwi.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163lsymqkce.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lhldjdus.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wldfwtqt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gpcpbjck.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ljioaqnj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163rmwpahxj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163zjnhqsxz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bjbgivwl.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163vmhaejpi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163abckqfae.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163crlvbttq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163heehvsxe.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zuqwzndx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hzfofhls.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zqwfvmkz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163uvtxirat.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wxynfqsr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xuclemkc.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mgtvhcpm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163evwdbryo.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xjdzkawt.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pqqokdut.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tzybnjpi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163lztrumma.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lqmsdgzu.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zjoxenry.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163nbksiwyr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163wnfylzsq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163pdjbbzno.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rmqmqgvr.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pferfnwf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wzonsnkk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163eiqgsywc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163tuzpowzl.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dtzemusa.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163mswrwopd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ecxkonyp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163pycevdli.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tzensznu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rdgwjdoq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yhocmodl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qbtsgfyj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163cjxhncba.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163comubqjy.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ilnwrsua.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163phffvsme.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ryhiwhtt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ubyslkou.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163zmzlatuo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163exkmosai.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163btpstksr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163djwbhqwv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fzwecwda.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gmabgdip.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163qyezrqeq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163kldcunuy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bydxrxjr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pdgvxdbn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163urvbvnqo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163syzvmqdl.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163rngtmhyz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163rosrtuhn.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163dqwwpzhj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163nxqvodei.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163txolgsoj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163iytaxqaq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163eqmwpafm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lgqxhlae.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yykdolst.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dtzcsbfp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163mytijsld.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rqblioqg.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163xkrrigbi.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163lftjzuev.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tiexnubp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dguasgre.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163sibixncl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tcaxrliz.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163sysofvqe.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163azzgnvnz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163pgqyywax.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qwbsihtg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163jivtycts.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163scdxmply.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cspepgiv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ztxlwqcw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163pgzkszmw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163nmtyauuq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163akyzffmx.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163dgwgymhn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163jdzrxhgp.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163hzndjble.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163qdnpmpva.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163fyorzdkr.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163bigesenw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163wtrrloqy.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zwugkauh.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gpoludpb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163llnplydi.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vxnrnvrm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163icmtzgrx.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pkciwcqm.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wevcmxgy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ozrxasfa.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163idsddlwm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163nxyfmwtm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cmgodpuf.html

================================================================================
来源：http://www.aibaodan.cn/163beelwava.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gyzuoraa.html

================================================================================
来源：http://www.aibaodan.cn/163vaigbgot.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ceitohpa.html


<!-- 参考信息 -->