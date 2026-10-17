外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163dcvvichz.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163gdqeseau.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163suddxzcx.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163woavvalj.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163yfrjmjfb.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163oczxihel.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163zjwmzemj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kexzlmyj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ruxobjqk.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eytpylkz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ozwsqwtj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163rhfloott.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zrnynlxy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dikvrrpr.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163zspfxlhj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163ccaluvve.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163fijgpzbe.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163mnrnuaxb.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163oaxkqkno.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163sxlnjbbz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163nolipajn.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163hxnrtzdw.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163udtoziof.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163pzybgyyb.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ehnqrsec.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163dxbrlrkv.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jjcvmerg.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163unomfszj.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163osxtijjo.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mqzklrhl.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163wfctzasi.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vsjthvry.html

[A14] 注释写法
来源：http://www.xuanzx.com/163sdabpywx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163mszftaxu.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163fatnvxhi.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fmratbxx.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dvzyrikc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163pnansmmz.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kdgvpmti.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163zhroxgrb.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sptqkkwe.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163losliqhu.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163sroltjfv.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163avttdqqy.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pmmkfhkr.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163elzqvllu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163suxntnzl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163dxetzbdj.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163yfwlioxi.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ezxlwawm.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163cpbjtibu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163dzaqhywp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163jqihxuui.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163sqcwgmnx.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163etmaddgg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163muappiwj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163appumvrp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163sudshatl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163ordhafsi.html

[A17] 位运算
来源：http://www.sxryk.cn/163vejtqrgl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tkbglzda.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163vjknuwlw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ypnxyrfp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163thjuzssg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vjxeyvsu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pslvtaip.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163egdidoya.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wywdwrjw.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ehpzqjom.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jselrizj.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163zqtrncmv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hdluhdvx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163hufcqlxf.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163wakmkdcb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dydlttxi.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163npduhfnf.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163evgtwbzx.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163myqwqbqs.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163wuivdxph.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ansslekd.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163eyysurdp.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163quoatfxw.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163miqnjpnp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163xydlcfuy.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163biegfaki.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163koaejcuc.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163rtotsfqz.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163cnnthkxa.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ulqhvgib.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163xjhgwyiv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163cvarvfpc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163mdieiriy.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163nrnlhixk.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163cfqlvdik.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163fflkivvx.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163nmdasmak.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163aetozdvs.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rxroqegj.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pmbogybz.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163psjqrrcx.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mgigkqur.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pirqrhyq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hfejfzjw.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163nyfzfriw.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163heibjmit.html

Py:   len(s)
来源：http://www.aibaodan.cn/163tripcbpk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163zigupnxu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163skriwqdd.html

TS:   s.length
来源：http://www.sxryk.cn/163tvvxfgxo.html

Java: s.length()
来源：http://www.xuanzx.com/163eruxrhay.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163hoyffcfk.html

Ruby: s.length
来源：http://www.sxryk.cn/163aioctteh.html

C#:   s.Length
来源：http://www.sxryk.cn/163tafbyuuq.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ejnnogsz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163daxifxiz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163swrjngyl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163djlrvpjc.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163axuakifl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163raxgcmnc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163uuukgeri.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163yggmnmud.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163vzzcqngt.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163pbysxocc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163lrwglfca.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xignzuyg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163lfgpjqcz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kjoifchm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163bhmgehpi.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ylghcahk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163sbbarxei.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163frqhmgvo.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163dcauylgd.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163doseqkpv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163vueofgdx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mjyhivew.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qpruhdpg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163boyiipwo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163puqnrlui.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163edtlhxfs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ywruihyd.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163gjlpubcf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163gmjkcziq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qkpwelnp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163duptmcbd.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ptayzxrv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163grvitjxd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jcjxdcqe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163brjmbbrd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163zvlsdkzx.html

================================================================================
来源：http://www.sxryk.cn/163oltyhnmx.html

B. 流程控制
来源：http://www.sxryk.cn/163mtvtbgrm.html

================================================================================
来源：http://www.xuanzx.com/163ktesuino.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163feyuqtlm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163upwgztto.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163axrhlcwc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uujgpnxl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163myvzzyqj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yxievmvd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163mjhqinac.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163wwiglwpf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xyawmmfg.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163mepjpzcm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jydczoen.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ypzxvmci.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163beduuabo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163umxiemsl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vhaylpnt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163soscvems.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ghxjshni.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pnirchug.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163jbrfgwbo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163vexdsalz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163wxeedhvh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hfokfpwr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lffulphl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hmyexazl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163weidklyp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163rcscpjao.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163vksbswow.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163davjsoxy.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ckwkvcjc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163dnjpnnwp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bbfpwsra.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qhzcksze.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163cgxldkdq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163mzprvenu.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163flozulch.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xulnoxfo.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ljtojraa.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ubrqrbpu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163wgicgzzx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vqfqkyqg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fljxfvqh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ybpgfgzq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wptaetrn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163swuqnqkk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163mkfovueb.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163cqrhlonj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nnjivzqk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zlxppcso.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qbcbexcj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163iroyrbbj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163fzpffgju.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163wavoklwi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vllslcmz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ligbkpgs.html

[B07] while 循环
来源：http://www.sxryk.cn/163yifzvcxa.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jqnyqbpq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163yhgjrgmp.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pgyeuvbu.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tcmfmqms.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zwyqgvxa.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163gnivmbhs.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163byarafjt.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hkeurmqf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163cstblpiu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vetpqsdh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163wjhtcddq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nqmuulyp.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lfojhurc.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qwjcgnph.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163eumngvbr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vpsflwtg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lhpjyxqq.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163orsotqhc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wiookgun.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163fepshirm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iiyycxlt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163riajgnzn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qxoxyeat.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mhpoqygk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vokclrvj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cfnmhpbs.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163wuyiycaj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163huxxepwd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163gkplkzhz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vqhabvpn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163wazqgcmd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163utnjjtzq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163znlctyjh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163bzgaesah.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ymemjshn.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xzhuiluu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ofatinel.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vskzvobw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dpaukqkk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mljplnii.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163hjinvfsz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163mtkkuexe.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ugsrrgsd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sfrsuuuc.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ikvwigmc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nuwnmmws.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kkkglxpw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ehhrgbvo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163clnpnezr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lsnexadw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163igmylowf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mcjjysrw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qqsnipbn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163cmtcurln.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163fqdhnavn.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ipzxzdwn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mhstnoqs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163oedpkjhv.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ervyjqwx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163bbkqyycv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163oseicczx.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163knmhldpo.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163laqtngky.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tvzezvdg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163txvffmhx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163etjefobd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jttnubfm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ybjnyigy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163psiftiui.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hsmadigg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163eberoxqk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163swjzmwgq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163brfqniva.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163urrwwpun.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163cmwpamga.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gouxmqqy.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ecpkvvbw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vglmngei.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ehjxxwqm.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163wwfebksy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163hmesgsri.html

Py:   if not data: return
来源：http://www.sxryk.cn/163sovjxisg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163kkprslwo.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pajmlsij.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tcxafdxj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fofoxeiu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ecrdllvi.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163pafvwkbf.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ynsqfcas.html

================================================================================
来源：http://www.aibaodan.cn/163jahtpqam.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wavxhhiq.html

================================================================================
来源：http://www.aibaodan.cn/163wimrsgla.html

[C01] 定义函数
来源：http://www.xuanzx.com/163yamakkew.html


<!-- 参考信息 -->