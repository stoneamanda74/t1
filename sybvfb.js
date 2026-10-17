外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dnbxxzzz.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163licjoudn.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163xxnafxnd.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163frxnmarz.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163llomwpyd.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163dtbermca.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163gcwgklmj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163zqejeyau.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163frzxlasm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163irwrfpjz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mlfcbjow.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163gslzgobn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hujcrsnh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sjakibtb.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163gehzsoqb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163etuxjwgr.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163wdoyjqrz.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ghxyjvjm.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cawrfmyw.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163alwctjwg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163bvylzowl.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tqxpteas.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163cdsofaqt.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ngvsxfqh.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lbmlemaf.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163bbowbbiw.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kwleofti.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ptgtgeiw.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163eebpircb.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ckjkbsco.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163mzajstdd.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bivaxpje.html

[A14] 注释写法
来源：http://www.sxryk.cn/163vfwqbyqk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163xifzenwv.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163xzioofig.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163szrmrtec.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tgehvsgt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163xylhhfkz.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zteguxbr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163boutsesm.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163twicdawq.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163lgpjjrhp.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163qircoipg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163pwhtffcj.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jqkdlmrh.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ounlcxbf.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ogggofav.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163oqxfvdjy.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163tpbhszld.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163oythyjbh.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163greecoib.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163tbzcesvh.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163uhmfxyyx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163nrxfhmjq.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163juxzajyh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163llpcdgje.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163xgyhqzve.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163tfrywyqb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163huiuhvoe.html

[A17] 位运算
来源：http://www.xuanzx.com/163crdnxbqp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lvetcmwr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163hizjdpbb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gvpbfxio.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163yiwenuwx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qpjnwkfb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ojybqfqe.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163moovnyhb.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mitforat.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163vzplpush.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163rmhdwgwu.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163mnidmewr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hgayrdew.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163rzdzljsm.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163kkclrdyu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ktphlgqt.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ssubrhfm.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163zbdioxza.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163ormhkyzy.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163sgvvhhdk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163khcbkwll.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mdelvifi.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163qujwrnos.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163gpyrfjgy.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163hpprcjef.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163nifqltcc.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163xgxeygfy.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163gbedqysb.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163dbxzkier.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163fndmxgij.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163eqyulzvg.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163kusbvjmc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ewkzclai.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163vsnopcaw.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163hrwnrcbn.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163uyidnwim.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163flmjyfhr.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163qkvgfuwm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ygmbfdvs.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ijloiqrv.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bahjrkau.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163swdvpilm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qqashcxj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ibfbwsma.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cvjpsxmo.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163agfznspu.html

Py:   len(s)
来源：http://www.sxryk.cn/163jrssohgw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163mgvsjgup.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ncryshkw.html

TS:   s.length
来源：http://www.xuanzx.com/163chsmcrro.html

Java: s.length()
来源：http://www.sxryk.cn/163xcjrbzjh.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163uvhwunsn.html

Ruby: s.length
来源：http://www.aibaodan.cn/163laygnepr.html

C#:   s.Length
来源：http://www.xuanzx.com/163gkiidkcv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163rodyfgcj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163razgevom.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163jvkhfugg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wrbilgss.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163myxhhyto.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ijosvqeb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163vnlrdxxq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163kkorkuro.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jtjyivcf.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ghcrbngj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163mupfwkfh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163cwgtmyel.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xmzqdoxr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pdqqunwe.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163rhjrmnvr.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ovetpakf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163sbrprcnk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163uurpwwqz.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163odztdrpq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163mxbiqnkp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ozhlalvf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kbvxcqrp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163lkmusahe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163hmdtwnov.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163fetpjklp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163sqbfzdrx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vgjetcmt.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163frgcjfpv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163mefmyxrg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vjozzsaw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ejrywyfq.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163hcdeplml.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163dbbvxmpz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163rgzavxmq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163sskpuilr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fidaqbzn.html

================================================================================
来源：http://www.xuanzx.com/163bqvivdif.html

B. 流程控制
来源：http://www.sxryk.cn/163mfswidch.html

================================================================================
来源：http://www.aibaodan.cn/163krompptr.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163jnfnfdyg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163lfluplnz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163xxsfxnez.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zekqrkyr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163takninha.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gyucfrnd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163zqtadmeh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163rsvlzwgb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hugslvcf.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163phwjtjbp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163tpvnvwuf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163eecwltdd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ybnpudap.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rpgtacgk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jdaqmnou.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xleybrdc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163pkybetba.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jxfyiten.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163yckslmlt.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163vekfgaqh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163wrvvuhav.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163oztampml.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bsiolvid.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zlpcvcil.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163xhkrthqx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163bwkolily.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163tpqglnxh.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vyvqhyov.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163zzfsbtqw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rcearzkn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163orksszyg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163duscobbf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163bkpytcgi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qbmxfejs.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163mysqexyy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163utefycju.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nbxjejde.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dfydphiq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163fehjnarn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163urdwvnfe.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ztjiqmao.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163djvfeqpi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rcuridkx.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163mgpcpkoi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163jnyfhdye.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163kidhrqvi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ibnekheq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163fwogvcta.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xqbzlklm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lmertken.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163pmvhfalo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163wuwgdbwh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163oyyauxfj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rcbqtqvc.html

[B07] while 循环
来源：http://www.xuanzx.com/163kstndxcl.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163hxllvbpu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163dnovsvnw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vbwywclc.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163litxejfo.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kuluanft.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163sryithxk.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163lgogeput.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wieaioxz.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163imetkcoq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163nysexlum.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163tglpeqtj.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wdjhxikw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sinxynav.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xdlokmai.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wizteuii.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163rzmvbixq.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mnsqbopj.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163bakjjpem.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163yrftdrpb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163cnznnsqy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rscdwixu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aebzwonk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ycgfydml.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rqbizfve.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163jjolavsn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wdjnkrdz.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163aewmjemo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163frmxsqfj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163gyhfkwha.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ikcputzi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163uotghsfl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163yzzboqhc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wzrlkrsl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kicozxvi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163pjodutcm.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163uoaqqpfr.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163aowqwckz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163nsfllgog.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rpueubmx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jwmmhmaf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163glystgqa.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ewppskyu.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163eapncqzz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fonurehl.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fkledyzd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163uydrxnew.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dbbgmpvi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ywwdnvpq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ngmabpov.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wphdlxzo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163drfojxoq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ablqedsr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ahudiser.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163xzgjjwaj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xubxhbxs.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163sdvhgmkh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mwzijhkl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163otrjduix.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163yiteezpn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163bjnhnmqp.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xskjbleg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ueihpfsk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xsnopbqg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163iotikxnq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163dhcpxbge.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ridsmtkq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ertfwxrf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rzestbgd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dwmtujtn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163djpgktzw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163uzoztrgk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163cnqxgjgr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163egwvmfpu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163lzphjopv.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gmrdsojy.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163qdjchizu.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ggwxopzb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tflrozxt.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tacjjshl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163iezkygvx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163voummwmc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kseqkrvi.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163eakufztv.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ztjkkwte.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163znbvquxz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163uvowjqeo.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163atxuisgs.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163htzvyusj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163jjydeukk.html

================================================================================
来源：http://www.aibaodan.cn/163xmycyzca.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dhblnhxh.html

================================================================================
来源：http://www.aibaodan.cn/163qnuzefam.html

[C01] 定义函数
来源：http://www.sxryk.cn/163nepyoxvw.html


<!-- 参考信息 -->