外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vyueaeww.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fdkbobwk.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pfkqrxsd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163pqljaqef.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kvmazsjr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163opeznkan.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163eygftvzy.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163hkixirsv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163ocgserxl.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163remgxpem.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163oyqlxldj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ryukbczq.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163weyhguxi.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163wbchahyh.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163cwifxhwa.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163yimoquiv.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gepqdvwx.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163yidmrwhc.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163urajkwvn.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wiekchpj.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163jweogwpw.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uyegqrit.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163fcdbfetz.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ndvemzyu.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163mpcrhpjd.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163bzwwdqpu.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163nsasvlhq.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rpduzfon.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xsefkyno.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163ojulvltj.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zhqkuago.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163siwnjxhw.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tdocftta.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163imwrhaoc.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163wnkijqwp.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163uadsfumc.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163kzzjuzjr.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jmjizcov.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163majezvmc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163fffzrfip.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ksyoqbeg.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163jktogiqx.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ykkxrago.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ouzowvfa.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163erhorswv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163hwnqcipv.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163wlgrzowz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163jokwkriy.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163cytkxlpm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163bigyckid.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xmcyijvb.html

[A17] 位运算
来源：http://www.xuanzx.com/163xxjomlxx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jbfcpbmd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163tngkkouk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oyduftjn.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163awsedqkr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wjucsaoj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qttrejoa.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dfiioenw.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163whfsvzal.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163dqqyygpm.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163bevhfeqq.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163vszyudie.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163douwxtnn.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163orekzhdq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163wpfsktkx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163luaqaikn.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163dlkzdiek.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163iuxecrac.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163lvktcffy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163puqyzhua.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163tnhhafrd.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fyheejjb.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bmytfmdo.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163rrdcmiup.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163lwtwltjl.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163okhyyabb.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163kcqsrvay.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163unmvrsem.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163mwwxogeu.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163pvaxqsel.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163qxmyngzj.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vokviepf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163qnhntyeo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163xwxroxeb.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163shunvmcs.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163mkdnoaqb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163lbwivttu.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ojknynfv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bkrmopkn.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ewcjlfxg.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163muikxuqn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ubxhzuov.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uieompct.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163grbpsnwy.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cvtwgnmq.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ppcvkyre.html

Py:   len(s)
来源：http://www.sxryk.cn/163azwekpry.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163himisxiu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163qdudsetb.html

TS:   s.length
来源：http://www.aibaodan.cn/163uikizknb.html

Java: s.length()
来源：http://www.aibaodan.cn/163oauenhvp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163rvzdpmjs.html

Ruby: s.length
来源：http://www.xuanzx.com/163pvutmlhj.html

C#:   s.Length
来源：http://www.sxryk.cn/163edtmdwam.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163cjglnccb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163alcatont.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163hueaptrg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tptmviob.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yqnxuqfz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sokyxtzr.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ssmfwger.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163quwtpuzp.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lzflnvcs.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163npawfgae.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163rgwmnfjg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163zeobenmj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163tdopegec.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163cbzeksff.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163cjenbfnh.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fifeqvis.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163hqvvecda.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163cxkgjxns.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163kthcapks.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163kwctqsoh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163zgkqoohm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mxrpettc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163pucgtlur.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hvldtxlz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vixjppmj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ezpdtyar.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163alhlwxyq.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163hiljfsym.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163nghxshrb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163qrlvyxdh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163npnntbbe.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163aqdztsbm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163flmkxpgg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163oixbfdwq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163jjvmojnv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163raqcsbjr.html

================================================================================
来源：http://www.xuanzx.com/163czbflvzt.html

B. 流程控制
来源：http://www.sxryk.cn/163uqcyfnno.html

================================================================================
来源：http://www.xuanzx.com/163mcjeftuh.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163aqgmdchc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vpomxdal.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vdtkixeh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163onjxttoh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hckqmydq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yoojopcr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163tolvbnon.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ixybqidd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tcxfaoay.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163opklkvxq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163fstvyves.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163didplmxn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aaosvbul.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ftidhigl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cxeyybyp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nmyxagwn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163olvwkatp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163udtrzdas.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163gvhkrbby.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163dvyndzix.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163vqnvgfot.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xnlhwidm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qkzfclsv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163wwjqhpro.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wtdvkbtr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163lqpvjtui.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163buetekjd.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163hjrvemdw.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163wcngtuma.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163asfkmwkc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163izaogelj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zgbtnszd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163bkocmdli.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163iafjjodm.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ixchcyfd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dvefszjf.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wujrxiro.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163iddbtymd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163tppprfax.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163blwckfnd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gmxwqbqa.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hdwnllnh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ranneneh.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163xacpmifh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lfnurslc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ofukzdzr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163telhwjie.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163terfocdt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163aeuwutkh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163iqfvpacz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163fnhxnggs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ssmldnsc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163atjddicx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163eaisnzgr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163msfamzlg.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163koslvbfn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xmdzbvfg.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kftpsdlx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jptfakhb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hacvriib.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163iakgtbnv.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163fodpzcug.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163exzaottp.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nonenmow.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163jfyzvaea.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qfajtywa.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xvqeompi.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163diqelmul.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163redghcqi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mvwwltqz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ddpojihb.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163keanqmvx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qldhmjpg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163eiytjbng.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163oiqcmqcm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ycikagdy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iwavrnfj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rbujcuwt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163tnwyolyt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163zdlnkghq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lxnxzwou.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ezlsebeg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ftlbkatd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163vpwfqtet.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hloalosk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qlejxnfs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xgeudtej.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163yigftmvy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ummpqqnx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163skupxend.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163earsavrf.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jpntatub.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163jwtvyxqp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dvbltrfq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163aqweyoea.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163takusbkq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qzleekhe.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163uwrrmzyr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163uquweptf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163reikdjut.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163pgbzxtln.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163iyijzmkh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rzjakosr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nnrvsjtw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rnanicat.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ytkwjntu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163npfttxjd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163uyzncnvs.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hobretcd.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zmhulejp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163dkmsfnls.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pznarnxb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xowsgzpl.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163peeronek.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qicnxvqh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163viztycxr.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163pxxtvxee.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ykksegvl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163firbyimy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163klgpihaf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vijykdlr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vsoctldu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qzxaedlq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vaqkshya.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ljrtvwyj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ftarueve.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163azfvgzio.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zrqorwlz.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163almcmbeb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163swsyyjrq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ytdcklvw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163keioygit.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163gljidplw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163panpuswp.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dnndlxya.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gduxkrup.html

Py:   if not data: return
来源：http://www.xuanzx.com/163weajajwq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qzafafar.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163smgmjsvv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163zspytlhg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163urusiojw.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163zadyudjw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nrdughuo.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163frfcfuyk.html

================================================================================
来源：http://www.sxryk.cn/163kmsdlyys.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mlbtcuvp.html

================================================================================
来源：http://www.xuanzx.com/163sfhzrdrv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163sywuxmvr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163sxwxlopl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dcypukze.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nxeqhctw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zcxlilrr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163roriuwet.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163altfuzux.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ggkyzycx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vgrreyou.html


<!-- 参考信息 -->