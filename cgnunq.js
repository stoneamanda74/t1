外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ciyzxqqo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163umyzcfgf.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nquwlxmo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163odopshxj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bnnteipf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kagdyokk.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163uaciidyj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tqlowbgj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163kaxbfbcc.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163vxagerfc.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163juyzxify.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163ldoyugqa.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163qewkafhs.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163rhslgfqg.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163vkwfzaks.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163cjrohzzp.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163aesaqisg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163lotcvtya.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hryesyqd.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163klozmgbu.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wmgbiarg.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163szzljinu.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163iffqshlh.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lcpsmgfp.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163lscducbj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vnilsuxq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163eaaxquma.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163bystretr.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vbhvczct.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163pxsrvrfs.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gyiyqbmg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163boectvmz.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163misuvnzp.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163bymqpmao.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163bpsyeobi.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163eyqrtmbi.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tbadxpnz.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163apiydbof.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163kkbjxzli.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163zqzgdjrw.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163zxkgiaxf.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vvrbbpxb.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163mjnlhsha.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ephlpqbe.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163wobntofq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163keugfpmm.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ubhyuuow.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163bmmcteag.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163qjxxbvun.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ggjbeeim.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163wrwxsyxd.html

[A17] 位运算
来源：http://www.xuanzx.com/163yzcclmsa.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ckoapgek.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163udkkuvkg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cpmsirls.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yfnidtzq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163llwkjtrk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163iwwjbfit.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163budbqswx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bgpchrtl.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163tyretcky.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163yunkyann.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163jdutkhwm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163mrszalur.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ywioqdsz.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163rwkgnsiv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163imyckxxt.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163eshxgwnk.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163ugbupght.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163xyviszgm.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163qtmdgyla.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163lkiqncqk.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ddvytrmh.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163btzprdjc.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163jdeaarxv.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163lmhzzimu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163oaxjfyrq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163hobucqzh.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ozhvqbco.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163qwrlaflm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163qwbtnxlo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163tifvsxyx.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163wojepkxb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163bmsotyjl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163qrlldnfr.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163qphfrqav.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163jqmjxjgq.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163beiupjmp.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163rwqculqx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gkbgzihm.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cfzyecsk.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mbuyoqxa.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163haiaqiyy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163chcfaqcx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163unlpqwul.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mxlhjhds.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163mqffprab.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ffhzdbjp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163syukpraj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ajddknwj.html

TS:   s.length
来源：http://www.sxryk.cn/163zrnizpjt.html

Java: s.length()
来源：http://www.sxryk.cn/163anxznwsb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163hoquedpu.html

Ruby: s.length
来源：http://www.aibaodan.cn/163quttzexk.html

C#:   s.Length
来源：http://www.xuanzx.com/163hpwxuhes.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163qwwvwppp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163pimubpwy.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163mjwyridc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163stphsyel.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163dyivsvcw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hobexeio.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163flcevuij.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163lkjjwqek.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rckskxkr.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ksgejpgb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163amedhtwa.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163qyevnqel.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163abufbidq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163icydliaw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kebakmge.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163plslljws.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163vuaufjzi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zjwkwgzb.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163xtllmhhz.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qmfpbkst.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163gtdxvzvg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163whhxhuiq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163eaopsuqg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163enmqlsit.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163hvuoriam.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163crbgjwoz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hvldfegq.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163gtspsgty.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163bagbmpdt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vdozkyks.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163yizhvwnp.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163dpmqizvb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163zgthrohg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163qhsdaahn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163aqrxlasn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mnywdptz.html

================================================================================
来源：http://www.xuanzx.com/163igupjfkv.html

B. 流程控制
来源：http://www.sxryk.cn/163zbgcinnc.html

================================================================================
来源：http://www.xuanzx.com/163pfswjcgn.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163cyobzrhy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163bumgwlwo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163jipvhonr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qawjfmak.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zhqmlfao.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zumtfywi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lqaieysb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163flsownla.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qnoursmf.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163mnduwmou.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163nteflbqe.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ggfnpmhp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xffubnzj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iqdvdqen.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163eqdtqcfu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163bwysnaus.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163supekjip.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aeeregcc.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163pazvbzar.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ejwgtbaz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ketkzuom.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nrhccgnn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kuajqxvx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ceqbreni.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vnqarduj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163kmkiegyi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163wcgkjahu.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163jwatlivm.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163yfadarpt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lgsvuydb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fmbduese.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mcdjczxl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ypxbdyxo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163xzvklvlk.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vuwanmsp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163qhpcbmgw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mjabwtax.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163egkldfxr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jommcndu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qshmesns.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cgrpadeg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lgdicano.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xbxblilk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163gwgyigvk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ougwvyqj.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ywmjvbca.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163bifihqig.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163zkpqqaqz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163merborwv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163utzkwzss.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163jmfhmimb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163teuheqqj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wcykbxfz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mttbjwdg.html

[B07] while 循环
来源：http://www.sxryk.cn/163nrjabpny.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163vleizvbh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163moefieks.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qkgxdqdf.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fhtykjjl.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jyfxtzpk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163dyivsbly.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ypvdswgc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163akhdejat.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163dawbwelr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qcfkoqcf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163nluhfaaq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163owmazpjq.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jfwcbshv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163olimxghv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163goqwndbs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163bwluptkv.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163laivjwxy.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163rxixeare.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kiqsfhfw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kusczzgi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wbbkpcrx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cnwqsvha.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163akjquzhs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xccsuweh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163miftqunp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ezmduhjd.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163pbbbkllq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bskwnzbu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rymnxqfo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163bbfbupmq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163edglypqm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163cqjeswen.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163cxdkiphl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163nacxmijd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163xvifccsv.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hzujjdeu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163vdjjxqow.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jacpclax.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cfdhtosi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nvxdeyke.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163djburkyc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fnrpeiew.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163hufaogwi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pawhadtt.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bsvazeya.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163pyaspivs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163krtqduik.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mycemiyn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163npaoymaf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rsfuvfow.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163cwwummhh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163uvkgpnrz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bbdpdlms.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vvdjtjry.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163lrvtrixj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vbiallfj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yhxusbam.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163guzrcevy.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163agodiqhl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cvunnqbq.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lxtfoaof.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163hoecdajj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ndzqzkpz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kqissszb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ljpjqqgs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ebwxyjkn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vgdukntw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163grtztvrr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163alqzrbsq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163isshglzn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163owmlizvk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163wqkvoqps.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163indgyhxp.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163yyffvukl.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ltqijarb.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vynxsmvb.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cxmaumeh.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163uryzvsbk.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zagnzyto.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163tpftuzrj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163mbbhabgy.html

Py:   if not data: return
来源：http://www.xuanzx.com/163brlygxvl.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163kadisoxu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163kfgmzfvc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hkbhtmco.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wpllxvoj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ntlcquqc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hrxnyhqw.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zxkxdvvk.html

================================================================================
来源：http://www.aibaodan.cn/163vpofowie.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vjkgvexm.html

================================================================================
来源：http://www.xuanzx.com/163judwdfhk.html

[C01] 定义函数
来源：http://www.sxryk.cn/163mqdfbdqd.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ujzkzrvt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uadnsikc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163eggeuqsr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lkemuupo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hicvjtze.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rgvuvzmj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zsfnjqcd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zmocmvby.html


<!-- 参考信息 -->